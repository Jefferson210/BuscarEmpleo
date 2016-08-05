app.controller("bachilleratoCtrl",['$scope',function($scope){
    console.log("Controlador bienvenidaCtrl");
 $scope.colegios = 
        [
           {"Nombre":'Dalcroze',"id":1},
           {"Nombre":'Colegio Humanistico Quito',"id":2},
           {"Nombre":'Colegio de liga ',"id":3},
           {"Nombre":'Maria angelica idrobo',"id":4},
           {"Nombre":'Andres F Cordova',"id":5},
           {"Nombre":'Colegio Dillon',"id":6}
           
        ],
   
  
   $scope.colegioinicial={

   	"Nombre":"Americano",
   	"id":7
   },



$scope.titulos = 
        [
           {"titulo":'Fisico matematico',"id":1},
           {"titulo":'Quimico Biologo',"id":2},
           {"titulo":'Sociales ',"id":3},
           {"titulo":'Ciencias Generales',"id":4},
           
          
           
        ],
   
  
   $scope.tituloinicial={
   	"titulo":'Contabilidad',

   	"id":5}

    }])