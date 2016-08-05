var app = angular.module('buscarEmpleo', ['ui.router','ui-rangeSlider'])

app.config(function($stateProvider, $urlRouterProvider){
    //lamamr a la vista
    $urlRouterProvider.otherwise('/index');
    $stateProvider   
    .state('resultados', {
        url:"/resultados",
        templateUrl:"rutas/resultados.html",
        controller:"resultadosCtrl"
    })
    .state('filtro', {
        url:"/filtro",
        templateUrl:"rutas/filtro.html",
        controller:"filtrosCtrl"
    }) 
    .state('info', {
        url:"/info/:idPerfil",
        templateUrl:"rutas/datosPerfil.html",
        controller:"datosPerfilCtrl"
    }) 

    .state('login', {
        url:"/login",
        templateUrl:"rutas/login.html",
        //controller:"datosPerfilCtrl"
    }) 
    .state('bienvenida', {
        url:"/bienvenida",
        templateUrl:"rutas/bienvenida.html",
        controller:"bienvenidaCtrl"

    }) 
    .state('registro_user', {
        url:"/registro_user",
        templateUrl:"rutas/Registro_Usuario.html",
        //controller:"datosPerfilCtrl"
    }) 
    .state('FBachillerato', {
        url:"/bachillerato",
        templateUrl:"rutas/FBachillerato.html",
        controller:"bachilleratoCtrl"
    }) 
    .state('FBachillerato2', {
        url:"/bachillerato",
        templateUrl:"rutas/FBachillerato2.html",
        controller:"bachilleratoCtrl"
    }) 
     .state('FUniversidad', {
        url:"/universidad",
        templateUrl:"rutas/FUniversidad.html",
        //controller:"datosPerfilCtrl"
    }) 
     .state('FUniversidad2', {
        url:"/universidad",
        templateUrl:"rutas/FUniversidad2.html",
        //controller:"datosPerfilCtrl"
    }) 
      .state('ELaboral', {
        url:"/laboral",
        templateUrl:"rutas/ExpLaboral.html",
        //controller:"datosPerfilCtrl"
    }) 
      .state('ELaboral2', {
        url:"/laboral",
        templateUrl:"rutas/ExpLaboral2.html",
        //controller:"datosPerfilCtrl"
    }) 
      .state('CAcademicos', {
        url:"/academicos",
        templateUrl:"rutas/FCursoAdicionales.html",
        //controller:"datosPerfilCtrl"
    }) 
    .state('CAcademicos2', {
        url:"/academicos",
        templateUrl:"rutas/FCursoAdicionales2.html",
        //controller:"datosPerfilCtrl"
    }) 

    .state('finalizado', {
        url:"/finalizado",
        templateUrl:"rutas/finalizado.html",
        controller:"bienvenidaCtrl",

    }) 
    .state('elegante', {
        url:"/elegante",
        templateUrl:"rutas/elegante.html",
        controller:"bienvenidaCtrl",
        
    }) 
    .state('natural', {
        url:"/natural",
        templateUrl:"rutas/natural.html",
        controller:"bienvenidaCtrl",
        
    }) 
    .state('deporte', {
        url:"/deporte",
        templateUrl:"rutas/deporte.html",
        controller:"bienvenidaCtrl",
        
    })
    .state('vercv', {
        url:"/vercv",
        templateUrl:"rutas/verCV.html",
        controller:"bienvenidaCtrl",
        
    })  
      .state('editarcv', {
        url:"/editarcv",
        templateUrl:"rutas/editarcv.html",
        controller:"bienvenidaCtrl",
        
    })
    .state('editarcv1', {
        url:"/editarcv1",
        templateUrl:"rutas/editarcv1.html",
        controller:"bienvenidaCtrl",
        
    }) 
    .state('editarcv2', {
        url:"/editarcv2",
        templateUrl:"rutas/editarcv2.html",
        controller:"bienvenidaCtrl",
        
    })  
});
