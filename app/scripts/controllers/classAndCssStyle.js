angular.module('classAndCssStyle', [])
    .controller('classAndCssStyleCtrl', function($scope) {

            $scope.isError = false;
            $scope.isWarning = false;

            $scope.showError = function() {
                $scope.messageText = 'This is an error!';
                $scope.isError = true;
                $scope.isWarning = false;
            };

            $scope.showWarning = function() {
                $scope.messageText = 'Just a warning. Please carry on.';
                $scope.isWarning = true;
                $scope.isError = false;
            };


            $scope.directory = [{
                    name: 'The Handsome Heifer',
                    cuisine: 'BBQ'
                }, 
                {
                    name: 'Greens Green Greens ', 
                    cuisine:'Salads '
                },
				{
					name:'House of Fine Fish ', 
					cuisine:'Seafood '
				}
			];

			$scope.selectRestaurant = function(row) {
				$scope.selectedRow = row;
			}
    })
