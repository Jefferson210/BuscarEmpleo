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
        templateUrl:"rutas/filtro.html"
    }) 
    .state('info', {
        url:"/info/:idPerfil",
        templateUrl:"rutas/datosPerfil.html",
        controller:"datosPerfilCtrl"
    }) 
});
