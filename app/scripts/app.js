'use strict';

angular.module('PruebaAngularApp', ['PruebaMain', 'Formulario', 'Directiva','Listado'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/formulario', {
                templateUrl: 'views/formulario.html',
                controller: 'formularioCtrl'
            })
            .when('/directiva', {
                templateUrl: 'views/directiva.html',
                controller: 'DirectivaCtrl'
            })
            .when('/listado', {
                templateUrl: 'views/listado.html',
                controller: 'listadoCtrl'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });
