var app3 = angular.module('app3', []);

app3.controller('gListCtrl', function($scope) {
  $scope.groceries = [

    {
      item: "Tomatoes",
      purchased: false
    }, {
      item: "Water",
      purchased: false
    }, {
      item: "Potatoes",
      purchased: false
    }, {
      item: "Bread",
      purchased: false
    },
  ];

  // Return a different HTML partial based on whether the
  // checkbox is checked or not
  $scope.getList = function() {
    return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html";
  };
});
