[Documentation table of contents](TOC.md)

# Usage

Once you have cloned or downloaded The Stack, creating a site or app
usually involves the following:

1. Set up the basic structure of the site.
2. Add some content, style, and functionality.
3. Run the build script to automate the optimization of your site -
4. Run your site locally to see how it looks.
5. Deploy your site.

During development you may work on `.less` or `.js` files. Grunt will need
to compile and/or uglify and bundle those files into the single CSS and JS
files used by the website. You can run those tasks once with the `grunt`
command. Or you can let Grunt run automatically each time you make changes:

```
grunt watch
```


## Basic structure

A basic HTML5 Boilerplate site initially looks something like this:

```
.
├── css
│   ├── main.css
├── doc
├── img
├── js
│   ├── main.js
│   ├── plugins.js
│   └── vendor
│       ├── jquery.min.js
│       ├── modernizr.min.js
│       └── bootstrap
│           └── bootstrap.js
├── less
│   ├── app.less
│   └── bootstrap
│       └── bootstrap.less
├── 404.html
├── apple-touch-icon-precomposed.png
├── index.html
├── humans.txt
├── robots.txt
├── crossdomain.xml
└── favicon.ico
```

What follows is a general overview of each major part and how to use them.

### css

This directory should contain all your project's CSS files. [About the
CSS](css.md).

### doc

This directory contains all the Stack documentation. You can use it
as the location and basis for your own project's documentation.

### js

This directory should contain all your project's JS files. Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.md).

### 404.html

A helpful custom 404 to get you started.

### index.html

This is the default HTML skeleton that should form the basis of all pages on
your site. If you are using a server-side templating framework, then you will
need to integrate this starting HTML with your setup.

Make sure that you update the URLs for the referenced CSS and JavaScript if you
modify the directory structure at all.

If you are using Google Tag Manager, make sure that you edit the corresponding
snippet after `<body>` to include your tag manager ID.

### humans.txt

Edit this file to include the team that worked on your site/app, and the
technology powering it.

### robots.txt

Edit this file to include any pages you need hidden from search engines.

### crossdomain.xml

A template for working with cross-domain requests. [About
crossdomain.xml](crossdomain.md).

### Icons

Replace the default `favicon.ico` and Apple Touch Icon with your own.

If you want to use different Apple Touch Icons for different resolutions please
refer to the [according documentation](extend.md#apple-touch-icons).

You might want to check out Hans' handy [HTML5 Boilerplate Favicon and Apple
Touch Icon
PSD-Template](http://drublic.de/blog/html5-boilerplate-favicons-psd-template/).
