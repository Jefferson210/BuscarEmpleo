app.controller('datosPerfilCtrl',['$scope','$stateParams',function($scope,$stateParams){
    console.log("Controlador datosPerfilCtrl");

    $scope.perfiles = [
        {
            "nombres":"Alessandro",
            "apellidos":"Del Piero",
            "celular":"0978412451",
            "estudios":"univeritarios",
            "urlImagen":"../images/perfil1.jpg",
            "id":1
        },
        {
            "nombres":"Juan Andres",
            "apellidos":"Molina Sandoval",
            "celular":"0978412451",
            "estudios":"univeritarios",
            "urlImagen":"../images/perfil1.jpg",
            "id":2
        },
        {
            "nombres":"Juan Andres",
            "apellidos":"Molina Sandoval",
            "celular":"0978412451",
            "estudios":"univeritarios",
            "urlImagen":"../images/perfil1.jpg",
            "id":3
        },
        {
            "nombres":"Juan Andres",
            "apellidos":"Molina Sandoval",
            "celular":"0978412451",
            "estudios":"univeritarios",
            "urlImagen":"../images/perfil1.jpg",
            "id":4
        },
        {
            "nombres":"Juan Andres",
            "apellidos":"Molina Sandoval",
            "celular":"0978412451",
            "estudios":"univeritarios",
            "urlImagen":"../images/perfil1.jpg",
            "id":5
        }
    ];

    $scope.id = $stateParams.idPerfil;
    console.log($scope.id);
    
}])