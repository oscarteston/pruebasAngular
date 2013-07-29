angular.module('Listado', [])

.controller('listadoCtrl', function($scope) {

    $scope.students = [{
        name: 'Mary Contrary',
        id: '1'
    }, {
        name: 'Jack Sprat',
        id: '2'
    }, {
        name: 'Jill Hill',
        id: '3'
    }];

    $scope.insertTom = function() {
        $scope.students.splice(1, 0, {
            name: 'Tom Thumb',
            id: '4'
        });
    };

    $scope.album = [{
        name: 'Southwest Serenade',
        duration: '2:34'
    }, {
        name: 'Northern Light Waltz',
        duration: '3:21'
    }, {
        name: 'Eastern Tango',
        duration: '17:45'
    }];

});
