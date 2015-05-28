app.router = new Backbone.Router();

Backbone.history.start();

// Add the default route, which runs when the url is blank
app.router.route('', function () {
  app.show('home');
});