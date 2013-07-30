angular.module('showAndHide', [])
    .controller('showAndHideCtrl', function($scope) {
        $scope.isDisabled = false;
        $scope.menuState = {
            show: false
        };
        //$scope.menuState.show = false;
        $scope.toggleMenu = function() {
            $scope.menuState.show = !$scope.menuState.show;
        };

        $scope.stun = function() {
            // stun the target, then disable menu to allow regeneration
            $scope.isDisabled = 'true';
        };
    });
