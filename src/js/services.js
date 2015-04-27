var instagramServices = angular.module('instagramServices', ['ngResource']);

var user_id, post_count, client_id, endpoint;

instagramServices.factory('Photos', ['$resource', function($resource){

  user_id = "828057799";
  post_count = "30";
  client_id = "5e7cb176cc4340c09124d9f50733f34f";
  endpoint = 'https://api.instagram.com/v1/users/'+user_id+'/media/recent/?client_id='+ client_id+'&count='+post_count+'&callback=JSON_CALLBACK';

  return $resource(endpoint, {}, {
    query: {method:'JSONP', params:{photoId:'photos'}}
  });
}]);
