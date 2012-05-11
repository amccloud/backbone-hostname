# Backbone Hostname #
Globally set the hostname for all Backbone models and collections.

## Download ##
https://raw.github.com/amccloud/backbone-hostname/master/backbone-hostname.js

[![Build Status](https://secure.travis-ci.org/amccloud/backbone-hostname.png)](http://travis-ci.org/amccloud/backbone-hostname])

## Example ##
```javascript
var User = Backbone.Model.extend({
    urlRoot: '/api/v1/user/'
});

Backbone.hostname = 'http://api.example.com';

var user = new User();
user.url() // 'http://api.example.com/api/v1/user/'
```
