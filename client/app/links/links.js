angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = Links.getLinks;

  var outerData = [];
  $scope.getLinks().then(function(data){
    outerData = data;
  });
  $scope.data.links = outerData;
  console.log($scope.data.links);
});
