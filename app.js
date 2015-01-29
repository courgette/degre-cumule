angular.module( 'degreCumule', [
  'ngRoute',
  'form'
  ]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'Form/form.html',
    controller: 'FormCtrl',
  }).
  otherwise({
    redirectTo: '/'
  });
}]);