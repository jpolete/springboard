
<img src="https://github.com/jpolete/springboard/blob/develop/public/images/logo-full@2x.png?raw=true" alt="Springboard Logo" width="320">

# Overview

Springboard is a starter component library for new web projects—basic HTML, SASS and JavaScript.

See a sample of the [component library](https://jpolete.github.io/springboard).

## Getting Started

The pattern library is built using [Fractal](https://github.com/frctl/fractal). 

Install Fractal if it's not installed already.

```
$ npm i -g @frctl/fractal
```

Install project dependencies.

```
$ npm install 
```

## Commands

Start a development environment. The development environment processes SASS and JavaScript files automatically and they're updated and runs a Fractal server (which includes live reloading in the browser: [localhost:3000](http://localhost:3000))

Linux/Mac (this will process assets and watch for changes as well as run a Fractal server and watch for component changes)

```
$ npm run dev
```

Windows (run each command in a separate command window)

```
# Watch and build js and css assets
gulp watch
```

```
# Run Fractal server and watch for changes
npm fractal:dev
```


To build a static pattern library for hosting.

Linux/Mac

```
$ npm run build
```

Windows

```
gulp

npm run fractal:build
```

## Building Components

Check out the [Fractal documentation](http://fractal.build/) for full details on building components.

Follow these general guidelines:

- For each component, create a new folder named for the component under one of the subfolders of `components`.
- In this folder include all assets for the component: .hbs, .scss, .config.yml, .js, etc. Sass (.scss) and JavaScript (.js) files will be automatically picked up and bundled by Gulp.
- Follow [BEM](http://getbem.com/) and [SMACSS](http://smacss.com/) conventions to ensure components are self-contained, reusable, and that your styles won't "bleed" through between components.

Asset processing is done by gulp.

- `sass/styles.scss` => `public/style.css` (includes all .scss files under "components" folder)
- `js/main.js` => `public/js/main.min.js` (includes all .js files under "components" folder)


