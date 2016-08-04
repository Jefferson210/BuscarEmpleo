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
});
