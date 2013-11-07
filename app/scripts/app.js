'use strict';

angular.module('PruebaAngularApp', ['PruebaMain', 'Formulario', 'Directiva', 'Listado', 'showAndHide', 'classAndCssStyle',
    'Directiva2', 'Watch'])
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
            .when('/directiva2', {
                templateUrl: 'views/directiva2.html',
                controller: 'Directiva2Ctrl'
            })
            .when('/listado', {
                templateUrl: 'views/listado.html',
                controller: 'listadoCtrl'
            })
            .when('/showAndHide', {
                templateUrl: 'views/showAndHide.html',
                controller: 'showAndHideCtrl'
            })
            .when('/classAndCssStyle', {
                templateUrl: 'views/classAndCssStyle.html',
                controller: 'classAndCssStyleCtrl'
            })
            .when('/watch', {
                templateUrl: 'views/watch.html',
                controller: 'watchCtrl'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });
