var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.Router.map(function() {
  this.route('credits', { path: '/thanks' });
  this.route('about');
  this.resource('products');
});
App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/logo-small.png',
  time: function() {
    return (new Date()).toDateString();
  }.property()
});
App.AboutController = Ember.Controller.extend({
  contactName: 'Jamie',
  avatar: 'images/avatar.png',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Sorry, Closed" : "We're Open";
  }.property()
});

App.PRODUCTS = [
{
  title: 'Flint',
  price: 9.99,
  description: 'Nice flint',
  isOnSale: true,
  image: ('images/products/flint.png')
},
{
  title: 'Kindling',
  price: 9.99,
  description: 'Nice kindling',
  isOnSale: true,
  image: ('images/products/kindling.png')
}
];

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});