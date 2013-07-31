angular.module('Watch', [])
    .controller('watchCtrl', function($scope) {
        $scope.value = Math.round((Math.random() * 10));
        // Creamos una función que se lanzará asíncronamente cada 3 segundos.
        setInterval(function() {
            $scope.value = Math.round((Math.random() * 10));
            // El método $apply sirve para notificar de cambios realizados
            //  asíncronamente a interacciones con la UI.
            $scope.$apply();
        }, 2000);
    })
    .directive('counter', function() {
        return {
            restrict: 'E',
            remplace: true,
            template: '<div ng-class={green:colorGreen,red:colorRed}>{{value}}</div>',
            link: function($scope, $element) {
                // Este método llamará al callBack que le pasamos cuando cambie el valor de value.
                $scope.$watch('value', function(oldValue, newValue) {
                    if (oldValue < newValue) {
                    	$scope.colorGreen = false;
                    	$scope.colorRed = true;
                    } else if (oldValue > newValue) {
                    	$scope.colorGreen = true;
                    	$scope.colorRed = false;
                    } else {
                    	$scope.colorGreen = false;
                    	$scope.colorRed = false;
                    }

                });
            },
        }
    })
