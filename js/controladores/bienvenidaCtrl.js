app.controller("bienvenidaCtrl",['$scope',function($scope){
    console.log("Controlador bienvenidaCtrl");

    $scope.perfil = 
        {
            "nombres":"Juan Jose",
            "apellidos":"Perez Mena",
            "fecha_de_nacimiento":"23/10/1993",
            "provincia":"Pichincha",
            "canton":"Quito",
            "ciudad":"Quito",
            "estado_civil":"soltero",
            "lugar de residencia":"la mañosca",
            "telefono":"3041549",
            "correo":"juan@gmail.com",
           
        },


        $scope.informacion = 
        {
            "universidad":"Escuela Politecnica Nacional",
            "tituloU":"Tec. Analisis de sistemas informaticos",
            "periodoU":"2012-2016",
            "bachillerato":"Don Bosco",
            "tituloB":"FIMA",
            "periodoB":"2005-2011",
            "Empresa":"Kruger",
            "cargo":"Desarrollador",
            "periodoE":"2016-2017",
            "curso":"Hacking Etico",
            "nivel":"avanzado",
          
        }




    

    }])