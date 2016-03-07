var app13 = angular.module('app13', []);

// When we use a template the template replaces the content
// in the document. You can use transclusion to display The
// original content and add in the new.

app13.service("HelloService", function() {

  this.helloService = function() {
    console.log('Hello Service');
  };

});

app13.factory('HelloFactory', function() {
  var factory = {};

  factory.helloFactory = function() {
    console.log('Hello Factory');
  };
  return factory;

});

app13.controller('mainCtrl', function(HelloService, HelloFactory) {
  HelloService.helloService();
  HelloFactory.helloFactory();
});