[Documentation table of contents](TOC.md)

# Frequently asked questions

### Why is the URL for jQuery without "http"?

This is an intentional use of [protocol-relative
URLs](http://paulirish.com/2010/the-protocol-relative-url/)

**N.B.** Using a protocol-relative URL for files that exist on a CDN is
problematic when you try to view your local files directly in the browser. The
browser will attempt to fetch the file from your local file system. We
recommend that you use a local server to test your pages (or Dropbox). This can
be done using Python 2.x by running `python -m SimpleHTTPServer` or Python 3.x
with `python -m http.server` from your local directory, using Ruby by installing
and running [asdf](https://rubygems.org/gems/asdf), and by installing any one of
XAMPP, MAMP, or WAMP.

### Why not automatically load the latest version of jQuery from the Google CDN?

1. The latest version of jQuery may not be compatible with the existing
   plugins/code on the site. Version updating should be an intentional
   decision.
2. The latest version has a very short `max-age=3600` compared to the specific
   version of `max-age=31536000`, which means you won't get the benefits of
   long-term caching.