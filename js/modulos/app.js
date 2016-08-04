var app = angular.module('buscarEmpleo', ['ui.router','ui-rangeSlider'])

app.config(function($stateProvider, $urlRouterProvider){
    //lamamr a la vista
    $urlRouterProvider.otherwise('/index');
    $stateProvider   
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
    .state('personal', {
        url:"/personal/:idPerfil",
        views:{
            "viewA":{templateUrl:"rutas/datosPerfil.html",
                    controller:"datosPerfilCtrl"},
            "viewB":{
                    templateUrl:"rutas/infoPersonal.html",
                    controller:"datosPerfilCtrl"
            }
        }
    }) 
     .state('academicos', {
        url:"/academicos/:idPerfil",
        views:{
            "viewA":{templateUrl:"rutas/datosPerfil.html",
                    controller:"datosPerfilCtrl"},
            "viewB":{
                    templateUrl:"rutas/infoAcademicos.html",
                    controller:"datosPerfilCtrl"
            }
        }
    }) 
    .state('cursos', {
        url:"/cursos/:idPerfil",
        views:{
            "viewA":{templateUrl:"rutas/datosPerfil.html",
                    controller:"datosPerfilCtrl"},
            "viewB":{
                    templateUrl:"rutas/infoCursos.html",
                    controller:"datosPerfilCtrl"
            }
        }
    }) 
    .state('laboral', {
        url:"/laboral/:idPerfil",
        views:{
            "viewA":{templateUrl:"rutas/datosPerfil.html",
                    controller:"datosPerfilCtrl"},
            "viewB":{
                    templateUrl:"rutas/infoLaboral.html",
                    controller:"datosPerfilCtrl"
            }
        }
    }) 
});
