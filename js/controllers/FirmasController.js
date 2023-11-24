smartBankingApp.controller('FirmasController', function ($scope) {
    // Obtener datos almacenados localmente
    $scope.solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];

    // Mostrar un alert al cargar la vista
    alert('Se realizó correctamente la solicitud');
});