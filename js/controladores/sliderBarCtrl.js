app.controller("sliderBarCtrl",["$scope",function($scope){
    $scope.educacion = {
        max_value : 100
    };
    
    $scope.exp_laboral = {
        max_value : 100
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

    
}]);