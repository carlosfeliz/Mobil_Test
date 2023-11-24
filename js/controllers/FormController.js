app.controller('TuControlador', function ($scope) {
    

    $scope.submitForm = function () {
        // Validar los datos del formulario 

        // Crear un objeto con los datos
        var solicitud = {
            tipoIdentificacion: $scope.formData.tipoIdentificacion,
            numIdentificacion: $scope.formData.numIdentificacion,
            primerNombre: $scope.formData.primerNombre,
            segundoNombre: $scope.formData.segundoNombre,
            primerApellido: $scope.formData.primerApellido,
            segundoApellido: $scope.formData.segundoApellido
        };

        // Obtener datos almacenados localmente (si los hay)
        var solicitudesGuardadas = JSON.parse(localStorage.getItem('solicitudes')) || [];

        // Agregar la nueva solicitud al arreglo
        solicitudesGuardadas.push(solicitud);

        // Guardar el arreglo actualizado en localStorage
        localStorage.setItem('solicitudes', JSON.stringify(solicitudesGuardadas));

        $location.path('/firmas');
    };
});
