
<img src="/blob/master/public/images/logo-full@2x.png" alt="Springboard Logo" width="320">

# Overview

Springboard is a starter component library for new web projects—basic HTML, SASS and JavaScript.

See a sample of the [component library](http://jpolete.github.io/springboard).

## Asset Processing

Asset processing is done by gulp. 

- Input: `sass/styles.scss` => Output: `public/style.css`
- Input: `js/main.js` => Output: `public/js/main.min.js` 

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

```
$ npm run dev
```

To build a static pattern library for hosting.

```
$ npm run build
```

Check out the [Fractal documentation](http://fractal.build/) for full details on building patterns.

