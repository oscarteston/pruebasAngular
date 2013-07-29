angular.module('Directiva', [])
    .controller('DirectivaCtrl', function($scope) {
        $scope.title = 'Click me to expand';
        $scope.text = 'Hi there folks, I am the content ' + ' that was hidden but is now shown.';
    })
    .directive('expanderTela', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                title: '=expanderTitle',
                expandir: "@"
            },
            templateUrl: "components/expand.html",
            link: function(scope, element, attrs) {

                scope.showMe = false;
                scope.toggle = function toggle() {
                    scope.showMe = !scope.showMe;
                }
            }
        }
    });
