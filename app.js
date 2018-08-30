const app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.message = 'Hello from parent!'
    $scope.updateMessage = function (newMessage) {
        $scope.message = newMessage
    }
})
app.directive('myDirective', function () {
    return {
        restrict: 'E',
        scope: {
            updateParentMessage: '&updateParent'
        },
        template: '<div>' +
            '{{ directiveUserInfo }}' +
            '<button ng-click="change()">Change from directive</button> ' +
            '</div>',
        controller: function ($scope) {
            $scope.change = function () {
                $scope.updateParentMessage({
                    xxx: 'hello from directive'
                })
            }
        }
    }
})