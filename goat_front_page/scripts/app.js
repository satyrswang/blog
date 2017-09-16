'use strict';

angular
  .module('nodejsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controllerAs: 'home'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controllerAs: 'register'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/home.html'
      });
  });
