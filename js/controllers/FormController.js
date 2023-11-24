// En tu controlador de AngularJS
app.controller('FormController', function ($scope, $http, $window) {
    $scope.formData = {}; // Datos del formulario

    $scope.submitForm = function () {
        // Guardar datos en un archivo JSON (simulado por ahora)
        var jsonData = {
            tipoIdentificacion: $scope.formData.tipoIdentificacion,
            numIdentificacion: $scope.formData.numIdentificacion,
            primerNombre: $scope.formData.primerNombre,
            segundoNombre: $scope.formData.segundoNombre,
            primerApellido: $scope.formData.primerApellido,
            segundoApellido: $scope.formData.segundoApellido
        };

        // Aquí deberías realizar una petición HTTP para guardar los datos en tu backend
        // Pero por ahora, solo mostraremos un alert simulado y redireccionaremos a la vista de firmas
        alert("Solicitud realizada correctamente");

        // Redireccionar a la vista de firmas
        $window.location.href = '#/firmas'; // Ajusta la URL según tu configuración de enrutamiento
    };
});

// Controlador para la vista de firmas
app.controller('FirmasController', function ($scope, $http) {
    // Aquí deberías realizar una petición HTTP para obtener los datos del backend
    // Pero por ahora, simularemos algunos datos
    $scope.firmasData = [
        // Datos simulados
        { nombre: 'Juan', firma: 'Firma de Juan' },
        { nombre: 'Ana', firma: 'Firma de Ana' },
        // ... (puedes cargar los datos desde el backend)
    ];
});
