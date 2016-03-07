var app14 = angular.module('app14', ["ngSanitize"]);

app14.controller('mainCtrl', function($scope, $window, $location,
  $interval, $log, $exceptionHandler, $sanitize) {
  $scope.greetUser = function(userName) {
    $window.alert("Hello " + userName);
  }

  $scope.currentURL = $location.absUrl();
  $scope.theProtocole = $location.protocol();
  $scope.currHost = $location.host();
  $scope.currPort = $location.port();
  $location.path("#/the/path");
  $scope.currPath = $location.path();
  $location.search("random=stuff");
  $scope.currSearch = $location.search();

});
