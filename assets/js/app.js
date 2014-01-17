requirejs.config({
  paths: {
    modernizr: 'vendor/modernizr-2.6.2.min',
    jquery: "vendor/jquery-1.10.2.min",
    knockout: "vendor/knockout-3.0.0"
  },
  shim: {
    "modernizr": {
      exports: "Modernizr"
    }
  }
});

require(["modernizr"], function(Modernizr) {
  return Modernizr.load();
});

require(["jquery"], function($) {
	// do something
	return $('body').append( $('<p>requirejs</p>') );
});

require(["knockout"], function(ko) {
  ko.applyBindings({greeting: "Howdy partner!"});
});

