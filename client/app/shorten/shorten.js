angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = "";
  var newlink = $scope.link;
  $scope.addLink = function($scope){
    Links.addLink({link: $scope.link});
  };

});
