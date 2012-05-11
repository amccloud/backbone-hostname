(function(_, Backbone) {
    Backbone.hostname = '';
    Backbone.Model.prototype.urlPath = Backbone.Model.prototype.url;

    _.extend(Backbone.Model.prototype, {
        url: function() {
            return Backbone.hostname + this.urlPath();
        }
    });
})(window._, window.Backbone);
