var app2 = angular.module('app2', []);

//1st controller
app2.controller('ctrl1', function($scope) {

  $scope.randomNum1 = Math.floor((Math.random() * 10) + 1); //number between 1 and 10
  $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);

});

// Define multiple controllers
app2.controller('evenNumCtrl', function($scope) {
  var evenNums = ["2", "4", "6", "8", "10"];

  $scope.even = evenNums[Math.floor((Math.random() * 5))];
});

app2.controller('oddNumCtrl', function($scope) {
  var oddNums = ["1", "3", "5", "7", "9"];

  $scope.odd = oddNums[Math.floor((Math.random() * 5))];
});