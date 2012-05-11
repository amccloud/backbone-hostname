var User = Backbone.Model.extend({
    urlRoot: '/api/v1/user/'
});

test("test no hostname", 1, function() {
    var user = new User();
    equal(user.url(), '/api/v1/user/');
});

test("test with hostname", 1, function() {
    Backbone.hostname = 'http://api.example.com';

    var user = new User();
    equal(user.url(), 'http://api.example.com/api/v1/user/');
});
