#CSSGrid
> Simple CSS grid based on Flexbox in the LIN3S way.

[![npm version](https://img.shields.io/npm/v/lin3s-css-grid.svg?style=flat-square)](https://www.npmjs.com/package/lin3s-css-grid)
[![NPM Status](http://img.shields.io/npm/dm/lin3s-css-grid.svg?style=flat-square)](https://www.npmjs.org/package/lin3s-css-grid)
[![devDependency Status](https://img.shields.io/david/LIN3S/CSSGrid.svg?style=flat-square)](https://david-dm.org/LIN3S/CSSGrid#info=dependencies)

##Installation
The recommended and the most suitable way to install is through *Yarn*:
```bash
$ yarn add lin3s-css-grid
```
or alternatively through *NPM*:
```bash
$ npm install --save lin3s-css-grid
```
Also, you can install through *Bower*.
```shell
$ bower install --save lin3s-css-grid
```

After installation process, you can include css file in your html.
```html
<link href="/your/path/lin3s-css-grid/dist/lin3scssgrid.min.css" type="text/css" rel="stylesheet">
```
However is highly recommend to use the Sass version of the grid including files as Sass's imports.
The best practice is to create a row.scss component that wraps all the grid generation logic. Basic example can be the
following code:

```scss
@import '../../scss/functions';
@import '../../scss/mixins';
@import '../../scss/variables';

$small-cols: 6;
$medium-cols: 3, 4, 6;
$large-cols: 1, 2, 3, 4, 6;
$xlarge-cols: 6;

@include grid__row('.row', 'adaptive');

.row__column {
  @include grid__column(12);
}

.row--centered {
  margin-left: auto;
  margin-right: auto;
}

.row--collapse {
  padding-left: $column-gutter / 2;
  padding-right: $column-gutter / 2;

  > .row__column {
    padding-left: 0;
    padding-right: 0;
  }
}

@include grid-column-for-media-query('small', $small-cols, $small-up);
@include grid-column-for-media-query('medium', $medium-cols, $medium-up);
@include grid-column-for-media-query('large', $large-cols, $large-up);
@include grid-column-for-media-query('xlarge', $xlarge-cols, $xlarge-up);

@include grid-column-push-for-media-query('large', $large-cols, $large-up);
@include grid-column-push-for-media-query('xlarge', $xlarge-cols, $xlarge-up);
```

##Licensing Options
[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=flat-square)](https://github.com/LIN3S/CSSGrid/blob/master/LICENSE)
