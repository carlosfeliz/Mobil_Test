
angular.module('smartBankingApp')
    .controller('MainController', function ($scope, $location) {
        $scope.message = "¡Bienvenido a SmartBanking!";

        $scope.navigateTo = function (section) {
            $location.path('/' + section);
        };
    });
