angular.module('Formulario', [])
    .controller('formularioCtrl', function($scope) {

        $scope.funding = {
            startingEstimate: 0
        };

        $scope.computeNeeded = function() {
            $scope.funding.needed = $scope.funding.startingEstimate * 10;
        };

        

        $scope.requestFunding = function() {
            window.alert("Sorry, please get more customers first.");
        };

        $scope.reset = function(){
        	$scope.funding.startingEstimate = 0;
        }

        $scope.$watch('funding.startingEstimate', $scope.computeNeeded);
    });
