
<img src="componentlib/public/images/logo-full.svg" alt="Springboard Logo" style="width: 20em;max-width: 100%;">

# Overview

Springboard is my starter kit of HTML, SASS and JavaScript for new web projects. It has a few sample files in `starters`, and a basic component library in `componentlib`.

See a sample of the [component library](http://jpolete.github.io/springboard).

## Asset Processing

For asset processing and browser refreshing, I use [Codekit](https://incident57.com/codekit/). If you use the terminal or another tool to compile assets, here are the two main assets that need processing.

- `sass/styles.scss` should be processed to `public/style.css`
- `js/main.js` should be processed to `public/js/main.min.js`. (see main.js comments for includes.)


## Polyfills

At one time I had grunt set up to download and then copy third party libaries, but it seems ridiculous to use npm to install thousands of lines of code just to download and copy a few libraries that you may or may not use.

Here are some polyfills you should consider using. In fact, the default page template at `components/04-templates/_page.hbs` expects both of these. Save them to `public/js/lib`:

- [HTML5 Shiv](https://github.com/aFarkas/html5shiv) -> `componentlib/public/js/lib/html5shiv.min.js`
- [Picturefill](https://github.com/scottjehl/picturefill) -> `componentlib/public/js/lib/picturefill.min.js`


## Getting Started

The pattern library is built using [Fractal](https://github.com/frctl/fractal). If you’ve never installed it before, open a shell and enter this at the prompt. You only need to do this once per machine.

```
$ npm i -g @frctl/fractal
```

In the project folder, `cd` into the `componentlib` directory, and install Fractal’s dependencies.

```
$ npm install 
```

Finally, start the server like this.

```
$ fractal start --sync
```

Browse to [localhost:3000](http://localhost:3000) to view the pattern library. 

Check out the [Fractal documentation](http://fractal.build/) for full details on building patterns.


## Other Stuff

### Starter Files

The “starters” folder has a couple of files in it that may be helpful depending on your project.

- sample.htaccess
- sample-functions.php (for Wordpress)

