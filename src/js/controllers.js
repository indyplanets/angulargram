var instagramControllers = angular.module('instagramControllers', ['ngRoute', 'instagramServices']);

instagramControllers.controller('InstagramCtrl', ['$scope', 'Photos', function InstagramCtrl($scope, Photos) {
  this.toggle = true;
  // this.fadeIt = function() {
  //   console.log("fadeIt");
  //   this.isHidden = !this.isHidden;
  // };
  $scope.photos = Photos.query();
  $scope.orderProp = '-created_time';
  console.log($scope.photos);
}]);

instagramControllers.controller('InstagramDetailCtrl', ['$scope', '$routeParams', '$http',
  function InstagramDetailCtrl($scope, $routeParams, $http) {

    client_id = "5e7cb176cc4340c09124d9f50733f34f";
    endpoint = 'https://api.instagram.com/v1/media/'+$routeParams.photoId+'?client_id='+ client_id+'&callback=JSON_CALLBACK';

    $http.jsonp(endpoint).success(function(data) {
      $scope.photo = data;
      console.log($scope.photo);
    });
  }]);
