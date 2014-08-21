angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  $scope.getLinks = Links.getLinks;
  $scope.goTo = Links.goToLink;
  $scope.data = {};
  $scope.data.links = [];
  $scope.getLinks().then(function(data){
    data.forEach(function(link, index, data){
      $scope.data.links.push(link);
    });
  });
  $scope.clickLink = function(){
    var link = this.link;
    $scope.goTo(link).then(function(res){
      console.log(res);
    });
  };
});
