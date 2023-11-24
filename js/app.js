
var smartBankingApp = angular.module('smartBankingApp', ['ngRoute']);


smartBankingApp.config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        })
        .when('/cuenta-ahorro', {
            templateUrl: 'templates/cuenta-ahorro.html',
            controller: 'CuentaAhorroController'
        })
        .when('/cuenta-corriente', {
            templateUrl: 'templates/cuenta-corriente.html',
            controller: 'CuentaCorrienteController'
        })
        .when('/tarjeta-credito', {
            templateUrl: 'templates/tarjeta-credito.html',
            controller: 'TarjetaCreditoController'
        })
        .when('/prestamos', {
            templateUrl: 'templates/prestamos.html',
            controller: 'PrestamosController'
        })
        .when('/certificados', {
            templateUrl: 'templates/certificados.html',
            controller: 'CertificadosController'
        })
        .when('/solicitudes', {
            templateUrl: 'templates/solicitudes.html',
            controller: 'SolicitudesController'
        })
        .when('/formulario', {
            templateUrl: 'templates/formulario.html',
            controller: 'FormController'
        })
        .otherwise({ redirectTo: '/main' });
});


// require('./js/controllers/MainController');
// require('./js/controllers/CuentaAhorroController');
// require('./js/controllers/CuentaCorrienteController');
// require('./js/controllers/TarjetaCreditoController');
// require('./js/controllers/PrestamosController');
// require('./js/controllers/CertificadosController');
// require('./js/controllers/SolicitudesController');
// require('./js/controllers/FormController');