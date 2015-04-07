<?php




/* =============================================================================

   Register and Configure Navigation Menus

============================================================================= */

/**
 * Register a header and footer custom navigation for the admin interface.
 *
 * http://codex.wordpress.org/Function_Reference/register_nav_menus
 */
register_nav_menus(
	array(
		'main-nav-header' => 'Main Navigation',
		'footer-nav'      => 'Footer Navigation'
	)
);







/* =============================================================================

   FILTERS

============================================================================= */


/**
 * Add a class to each <li> element in the nav menu
 *
 * http://codex.wordpress.org/Plugin_API/Filter_Reference/nav_menu_css_class
 *
 * @param array  $classes an array of class names
 * @param object $item    Nav menu item data object 
 *
 */
function jdp_filter_nav_menu_css_class($classes, $item) {
	$classes[] = 'main-nav__item';
	return $classes;
}

add_filter('nav_menu_css_class', 'jdp_filter_nav_menu_css_class', 10, 2);



/**
 * Add class to each <a> inside <li> element
 *
 * http://codex.wordpress.org/Plugin_API/Filter_Reference/nav_menu_link_attributes
 * 
 * @param array  $atts HTML attributes in an associative array
 * @param object $item Object containing item details. E.G: If the link is to a 
 *                     page $item will be a WP_Post object
 * @param array  $args Array containing config with desired markup of nav item
 *
 */
function jdp_filter_add_nav_a_classes( $atts, $item, $args ) {
	$atts['class'] = 'main-nav__link';
	return $atts;
}

add_filter('nav_menu_link_attributes', 'jdp_filter_add_nav_a_classes', 10, 3);




/**
 * Page Title Filter
 *
 * Builds a title for the html title element based on the WordPress blog name and
 * current page name.
 *
 * @param  string $title the title of the current page
 * @param  string $sep   a character/string to separate multi-part page names.
 *
 * @return string full generated page title
 */
function jdp_filter_wp_title($title, $sep) {
	$site_name = get_bloginfo('name');
	$full_title = "$site_name $title";

	if(is_front_page() || is_home()) {
		$site_desc = get_bloginfo('description');
		$full_title .= " $sep $site_desc";
	}

	return $full_title;
}

add_filter('wp_title', 'jdp_filter_wp_title', 10, 2);


/**
 * Expose custom styles through the Tiny MCE editor.
 *
 * http://codex.wordpress.org/TinyMCE_Custom_Styles
 */
function my_mce_buttons_2( $buttons ) {
	array_unshift( $buttons, 'styleselect' );
	return $buttons;
}
add_filter('mce_buttons_2', 'my_mce_buttons_2');

function my_mce_before_init_insert_formats( $init_array ) {  
	// Define the style_formats array
	$style_formats = array(  
		// Each array child is a format with it's own settings
		array(  
			'title' => 'Button (plain)',  
			'selector' => 'a',
			'classes' => 'btn',
			'wrapper' => false,
		),
		array(  
			'title' => 'Button (next)',  
			'selector' => 'a',
			'classes' => 'btn next',
			'wrapper' => false,
		)
	);  
	// Insert the array, JSON ENCODED, into 'style_formats'
	$init_array['style_formats'] = json_encode( $style_formats );  
	
	return $init_array;  
  
} 
// Attach callback to 'tiny_mce_before_init' 
add_filter( 'tiny_mce_before_init', 'my_mce_before_init_insert_formats' );  

/**
 * Add styles to Tiny MCE
 * 
 */
function my_theme_add_editor_styles() {
    add_editor_style( 'tiny-mce.css' );
}
add_action( 'after_setup_theme', 'my_theme_add_editor_styles' );







/* =============================================================================

   UTILITIES

============================================================================= */


/**
 * Takes a string of one-item-per-line items and wraps in an unordered list.
 * 
 * Useful for allowing site authors and contributors to input items into a text
 * box, one-item-per-line and not have to worry about WYSIWYG styling. 
 *
 * @param string $items      a newline separated string of items to be converted
 *                           to an unordered list
 * @param string $class_name class name to add to the unordered list 
 *
 * @return string 
 */
function jdp_make_unordered_list($items, $class_name = null) {
	$items_array = explode("\n", $items);
	$html = '<ul'. (($class_name) ? ' class="'.$class_name.'"' : '') .'>';
	foreach($items_array as $item) {
		$html.= "<li>$item</li>";
	}
	$html.= '</ul>';
	return $html;
}


/**
 * Strips paragraph html tags from content. Useful if you want to give admins a
 * WYSIWYG editor to allow inline styles (bold, italics, etc), but don't want
 * the final output to be wrapped in `<p>` tags.
 *
 * @param string $content html content from which to strip <p> </p> tags.
 *
 * @return string
 */
function jdp_strip_p_tags($content) {
	$p_tags = array("<p>", "</p>");
	return str_replace($p_tags, '', $content);
}


/**
 * Adds class(es) to all instances of an element in $content.
 *
 * @param string $el         an html element name _without_ the < and > (e.g. use `p`
 *                           not `<p>`) 
 * @param string $class_name class name(s) to set on the element. Separate
 *                           separate classes with whitespace.
 * @param string $content    the source content to which to add the class names.
 *
 * @return the original `$content` with `$class_name`(s) added to `$el`
 *
 */
function jdp_add_class_name($el, $class_name, $content) {
	return str_replace('<'.$el.'>', '<'.$el.' class="'.$class_name.'">', $content);
}






/* =============================================================================

   Form Validation

============================================================================= */


$jdp_form_field_errors = array();


/**
 * Add an error message to a form field.
 *
 * Used internally by `form_input_is_valid` to collect error messages for
 * invalid form fields.
 *
 * @param string $field name of a form field.
 * @param string $msg   the error message to be displayed
 *
 * @return void
 */
function add_field_error_msg($field, $msg) {
	global $jdp_form_field_errors;
	if(!array_key_exists($field, $jdp_form_field_errors)) {
		$jdp_form_field_errors[$field] = array();
	}
	$jdp_form_field_errors[$field][] = $msg;
}

/**
 * Returns true if a form field has one or more errors associated with it.
 *
 * @param string $name name of a form field
 *
 * @return boolean 
 */
function has_field_error($name) {
	global $jdp_form_field_errors;
	return array_key_exists($name, $jdp_form_field_errors);
}

/**
 * Combines all error messages for a field into a single string
 *
 * @param string $name name of the form field.
 * @param string $sep  the separator to use between error messages - defaults to
 *                     a comma followed by a single space.
 *
 * @return string 
 */
function get_compiled_field_error_msgs($name, $sep = ', ') {
	global $jdp_form_field_errors;

	//Message
	$msg = '';

	//Loop through errors and concat them
	foreach($jdp_form_field_errors[$name] as $e) {
		$msg.= $e.$sep;
	}

	//Remove last instance of separator
	$msg = preg_replace('/'.preg_quote($sep).'$/', '', $msg)
	return $msg;
}


/**
 * Builds a string of HTML containing all of the error messages for a field.
 *
 * The result is a chunk of HTML consisting of all of the errors for a field as
 * created by calling `get_compilted_field_error_msgs` wrapped in a div with a 
 * class of $class_name.
 *
 * @param string $field      the form field name.
 * @param string $class_name the class name(s) to add to the wrapping div.
 *
 * @return string generated chunk of html
 *
 */
function get_field_errors($field, $class_name) {
	$html = '';
	if(has_field_error($field)) {
		$html.= '<div class="'.$class_name.'">';
		$html.= get_compiled_field_error_msgs($field);
		$html.= '</div>';
	}
	return $html;
}



/**
 * Returns the POST'ed value of a form field.
 * 
 * @param string $field the form field
 *
 * @return the value of the POST variable or an empty string if it doesn't exist
 *
 */
function get_field_value($field) {
	return (isset($_POST[$field]) ? trim($_POST[$field]) : '');
}


/**
 * Validates form input based on a set of validation rules.
 *
 * Calling this method validates submitted form fields based on a set of
 * supplied validation rules (described below). After calling this method you
 * can call `has_field_errors` and `get_field_errors` to display specific form 
 * field errors on the page.
 *
 * The `$validation_rules` parameter must be an associative array where the keys are the
 * names of the form fields and the values are arrays of validation rules. Each
 * validation rule is itself an associative array with two elements: 'type' and 
 * 'msg'. The 'type' value can be 'required', 'email', or 'regex'. If the type
 * is 'regex' you must also include a 'pattern' key with a regular expression
 * as the value. The 'msg' value should be the error message to present to the
 * user. Example:
 *
 *     $validation_rules = array(
 *        	'fullname' => array(
 *        		array(
 *        			'type' => 'required',
 *        			'msg'  => 'Enter your name'
 *        			)
 *        		),
 *        	'email' => array(
 *        		array(
 *        			'type' => 'required',
 *        			'msg' => 'Enter your email'
 *        			),
 *        		array(
 *        			'type' => 'email',
 *        			'msg' => 'Invalid email'
 *        			)
 *        	    ),
 *          'message' => array(
 *        	    array(
 *        		    'type' => 'required',
 *        		    'msg'  => 'Don\'t forget to say something :)'
 *        		)
 *        	)
 *     );
 *
 *
 * @param array $validation_rules an associative array of form field names and 
 *                                their associated validation rules.
 * 
 * @return boolean true is all fields validate, false if any fields fail
 *                 validation
 *
 */
function form_input_is_valid($validation_rules) {
	$valid = true;
	global $jdp_form_field_errors;

	//Iterate through validation rules
	foreach($validation_rules as $field => $validations) {

		//Test POST value for each rule
		foreach($validations as $rule) {

			$posted_value = $_POST[$field];

			//If required... 
			if($rule['type'] === 'required') {
				if(!isset($posted_value) || strlen(trim($posted_value)) === 0) {
					add_field_error_msg($field, $rule['msg']);
					$valid = false;
				}
			}

			//If email...
			if($rule['type'] === 'email') {
				if(isset($posted_value) && strlen(trim($posted_value)) > 0 && !filter_var($posted_value, FILTER_VALIDATE_EMAIL)) {
					add_field_error_msg($field, $rule['msg']);
					$valid = false;
				}
			}

			//If regular expression... 
			if($rule['type'] === 'regex') {
				if(isset($posted_value) && strlen(trim($posted_value)) > 0 && preg_match($rule['expression'], $posted_value) === 0) {
					add_field_error_msg($field, $rule['msg']);
					$valid = false;
				}
			}
		}
	}

	return $valid;

}

function is_postback() {
	return $_SERVER['REQUEST_METHOD'] == 'POST';
}








/** 
 *
 *   Creates a cache buster URL by inserting a timestamp based on the file
 *   modification date into the file name of a javascript, css or image asset.
 *
 *   By timestamping the file name, you can set far-future expires headers for 
 *   performance while still allowing for clients to be served the updated 
 *   file if
 *   it changes.
 *
 *   For cache busting to work, you must use this function in conjunction with 
 *   mod_rewrite rules so you don't get a 404 when the server can't find a
 *   physical file matching the timestamped file name. Use this rule in your 
 *   .htaccess file... 
 *
 *	 RewriteRule ^(.+)\.(\d+)\.(js|css|png|jpg|gif)$ $1.$3 [L] 
 *
 *   And place it BEFORE the pretty url rewrite. Example...
 *
 *		<IfModule mod_rewrite.c>
 *			RewriteEngine On
 *			RewriteBase /
 *			RewriteRule ^index\.php$ - [L]
 *
 *			# Remove timestamps from asset urls
 *			RewriteCond %{REQUEST_FILENAME} !-f
 *			RewriteCond %{REQUEST_FILENAME} !-d
 *			RewriteRule ^(.+)\.(\d+)\.(js|css|png|jpg|gif)$ $1.$3 [L] 
 *
 *			# "Pretty URL" rewrite
 *			RewriteCond %{REQUEST_FILENAME} !-f
 *			RewriteCond %{REQUEST_FILENAME} !-d
 *			RewriteRule . /index.php [L]
 *		</IfModule>
 *
 *	Then you can set far-future expires headers, like this...
 *
 *		<IfModule mod_expires.c>
 *			ExpiresActive on
 *			ExpiresByType application/javascript "access plus 2 months"
 *			ExpiresByType image/jpg "access plus 2 months"
 *			ExpiresByType image/jpeg "access plus 2 months"
 *			ExpiresByType image/gif "access plus 2 months"
 *			ExpiresByType image/png "access plus 2 months"
 *			ExpiresByType text/css "access plus 2 months"
 *		</IfModule>
 *
 *
 * @param string $uri the full url of a JavaScript, CSS or image asset.
 * 
 * @return string a modified url with a file modification-based timestamp
 *                embedded in the file name. 
 *
 */
function cache_buster_url($uri) {

	//Get base url of WP installation
	$base_url = get_bloginfo('url');

	//Get local path to the root of the WP installation
	$installation_root = $_SERVER['DOCUMENT_ROOT'];

	//Get path (from root) to file
	$path_info = str_replace($base_url, '', $uri);

	//If path has no dot (no file extension), return unchanged
	if(strpos($path_info, ".") === false) { return $path_info; }

	//Get full local path to file
	$local_path = $installation_root . $path_info;

	//Generate numeric timestamp based on modification date
	$cache_buster_date = date("YmdHis", filemtime( $local_path ));	

	//Add the timestamp to the file name right before the file extension
	$url_chunks = explode(".", $path_info);
	array_splice($url_chunks, count($url_chunks) - 1, 0, $cache_buster_date);

	//Return full, rewritten uri
	return $base_url . join(".", $url_chunks);
}





?>