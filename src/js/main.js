var instagramApp = angular.module('instagramApp', [
  'ngAnimate',
  'ngRoute',
  'instagramControllers',
  'instagramServices'
  ]);

// instagramApp.directive('hideMe', function($animate) {
//   return function(scope, element, attrs) {
//     scope.$watch(attrs.hideMe, function(newVal) {
//       if (newVal) {
//         $animate.addClass(element, 'fade');
//         console.log("addClass "+element);
//       } else {
//         $animate.removeClass(element, 'fade');
//       }
//     });
//   };
// });

instagramApp.animation(".toggle", function() {
  return {
    leave: function(element, className) {
      console.log("leave "+element);
    },
    enter: function(element, className) {
      console.log("enter "+element);
    }
  };
});


instagramApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/photos', {
        templateUrl: 'templates/instagram.html',
        controller: 'InstagramCtrl'
      }).
      when('/photos/:photoId', {
        templateUrl: 'templates/instagram-detail.html',
        controller: 'InstagramDetailCtrl'
      }).
      otherwise({
        redirectTo: '/photos'
      });
}]);
