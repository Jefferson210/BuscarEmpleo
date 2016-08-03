app.controller("filtrosCtrl",["$scope",function($scope){

    $('#nivel_educacion').multiselect({
        numberDisplayed: 5
    });

    $('#nivel_educacion').multiselect({

        onChange: function(element, checked) {
            if (checked === true) {
                //action taken here if true
            }
            else if (checked === false) {
            }
        }
    });

    $('#cursos').multiselect({
        numberDisplayed: 4
    });

    $('#cursos').multiselect({

        onChange: function(element, checked) {
            if (checked === true) {
                //action taken here if true
            }
            else if (checked === false) {
            }
        }
    });
    $('#jornada_job').multiselect({
        numberDisplayed: 4
    });

    $('#jornada_job').multiselect({

        onChange: function(element, checked) {
            if (checked === true) {
                //action taken here if true
            }
            else if (checked === false) {
            }
        }
    });
    $('#categorias').multiselect({
        numberDisplayed: 5
    });

    $('#categorias').multiselect({

        onChange: function(element, checked) {
            if (checked === true) {
                //action taken here if true
            }
            else if (checked === false) {
            }
        }
    });
    $scope.exp_laboral = {
        max_value : 10
    };

    $scope.min_edad = [];
    for(i = 20; i<=50;i++){
        $scope.min_edad.push(i);
    }

    $scope.max_edad = [];
    for(i = 20; i<=50;i++){
        $scope.max_edad.push(i);
    }

    $scope.ubicacion = ["Azuay","Bolivar" ,"Cañar","Carchi","Chimborazo","Cotopaxi","El Oro","Esmeraldas",
                        "Galápagos","Guayas","Imbabura","Loja","Los Rios","Manabí","Morona Santiago","Napo","Orellana","Pastaza", 
                        "Pichincha","Santa Elena","Sto.Domingo Tsáchilas","Sucumbíos","Tungurahua","Zamora Chinchipe"];

    $scope.educacion = ["Bachiller","Universidad","PHD","Ingeniero","Tecnologo","Master","Licenciado"];

}]);