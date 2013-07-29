'use strict';

angular.module('PruebaAngularApp', ['PruebaMain','Formulario','Directiva'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/formulario',{
        templateUrl: 'views/formulario.html',
        controller: 'formularioCtrl'
      })
      .when('/directiva',{
        templateUrl: 'views/directiva.html',
        controller: 'DirectivaCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
