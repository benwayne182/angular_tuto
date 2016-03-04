// Define the AngularJS Module
var app5 = angular.module('app5', []);

// Define the Controller and implement the Scope
app5.controller('gListCtrl', function($scope) {
  $scope.groceries = [{
    item: "Tomatoes",
    purchased: false
  }, {
    item: "Potatoes",
    purchased: false
  }, {
    item: "Bread",
    purchased: false
  }, {
    item: "Water",
    purchased: false
  }];

  $scope.addItem = function(newItem) {
    // Check that the input box has a value
    if (!(newItem === undefined || newItem === "")) {
      $scope.groceries.push({
        item: newItem,
        purchased: false
      });
      $scope.missingNewItemError = "";
    } else {

      // Show an error if no item was entered
      $scope.missingNewItemError = "Please Enter an Item";
    }
  };

});

app5.controller('userCtrl', function($scope) {

  $scope.user = [{
    fName: "Ben",
    lName: "Wayne",
    street: "182 Street Credibility",
    subscribe: "Subscribe",
    delivery: "Email"
  }];

  $scope.saveUser = function(userInfo) {
    if ($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName,
        lName: userInfo.lName,
        street: userInfo.street,
        subscribe: userInfo.subscribe,
        delivery: userInfo.delivery
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
  }

});