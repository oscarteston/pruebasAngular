angular.module('Watch', [])
    .controller('watchCtrl', function($scope) {
        /*Ejempolo de uso del Watch*/
        $scope.bill = {};
        $scope.items = [{
            title: 'Paint pots',
            quantity: 8,
            price: 3.95
        }, {
            title: 'Polka dots',
            quantity: 17,
            price: 12.95
        }, {
            title: 'Pebbles',
            quantity: 5,
            price: 6.95
        }];

        $scope.totalCart = function() {
            var total = 0;
            for (var i = 0, len = $scope.items.length; i < len; i++) {
                total = total + $scope.items[i].price * $scope.items[i].quantity;
            }
            return total;
        }

        $scope.subtotal = function() {
            return $scope.totalCart() - $scope.bill.discount;
        };

        function calculateDiscount(newValue, oldValue, scope) {
            $scope.bill.discount = newValue > 100 ? 10 : 0;
        }

        $scope.$watch($scope.totalCart, calculateDiscount);


    })


.directive('counter', function() {
    return {
        restrict: 'E',
        remplace: true,
        template: '<div ng-class={green:colorGreen,red:colorRed}>{{value}}</div>',
        link: function($scope, $element) {
            /*Directiva + watch*/
            $scope.value = Math.round((Math.random() * 10));
            // Creamos una función que se lanzará asíncronamente cada 3 segundos.
            setInterval(function() {
                $scope.value = Math.round((Math.random() * 10));
                // El método $apply sirve para notificar de cambios realizados
                //  asíncronamente a interacciones con la UI.
                $scope.$apply();
            }, 2000);

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
