app.controller('datosPerfilCtrl',['$scope','$stateParams',function($scope,$stateParams){
    console.log("Controlador datosPerfilCtrl");

    $scope.candidatos = [
        {
            candidato:
            {
                id:1,
                personales:{imagen:"images/candidatos/usr1.jpg",nombre:"Victor", apellido:"Bastidas",edad:22,email:"victor@gmail.com",provincia:"pichincha"},
                estudios:{nivel:"universitario", titulo:"Tecnólogo", cursos:{curso:"desarrollo web",curso:"ofimatica"}},
                laboral:{experiencia:2,categoria:{cat1:"desarrollo web",cat2:"programacion"},jornada:"medio tiempo"}
            }
        },
        {
            candidato:
            {
                id:2,
                personales:{imagen:"images/candidatos/usr2.png",nombre:"Geovanny", apellido:"Meza",edad:23,email:"geovanny@gmail.com",provincia:"pichincha"},
                estudios:{nivel:"universitario", titulo:"Ingeniero", cursos:{curso:"administracion de personal"}},
                laboral:{experiencia:5,categoria:{cat1:"docencia",cat2:"administracion"},jornada:"medio tiempo"}
            }
        },
        {
            candidato:
            {
                id:3,
                personales:{imagen:"images/candidatos/usr3.jpg",nombre:"Jose", apellido:"Molina",edad:30,email:"jose@gmail.com",provincia:"guayas"},
                estudios:{nivel:"bachiller", titulo:"bachiller", cursos:{curso:"ofimatica"}},
                laboral:{experiencia:1,categoria:{cat1:"ventas",cat2:"oficina"},jornada:"tiempo completo"}
            }
        },
        {
            candidato:
            {
                id:4,
                personales:{imagen:"images/candidatos/usr4.jpeg",nombre:"Sylvia", apellido:"Acosta",edad:28,email:"sylvia@gmail.com",provincia:"imbabura"},
                estudios:{nivel:"universitario", titulo:"ingeniero", cursos:{curso:"Desarrollo Humanoy Gerencial"}},
                laboral:{experiencia:4,categoria:{cat1:"ventas",cat2:"administracion"},jornada:"tiempo completo"}
            }
        },
        {
            candidato:
            {
                id:5,
                personales:{imagen:"images/candidatos/usr5.jpg",nombre:"Pamela", apellido:"Castro",edad:27,email:"pamelita@gmail.com",provincia:"loja"},
                estudios:{nivel:"universitario", titulo:"ingeniero", cursos:{curso:"Selección y Evaluacion Personal"}},
                laboral:{experiencia:2,categoria:{cat1:"ventas",cat2:"administracion"},jornada:"fines de semana"}
            }
        },
        {
            candidato:
            {
                id:6,
                personales:{imagen:"images/candidatos/usr6.jpg",nombre:"Carla", apellido:"Molina",edad:33,email:"carlita@gmail.com",provincia:"cotopaxi"},
                estudios:{nivel:"universitario", titulo:"ingeniero", cursos:{curso:"redes"}},
                laboral:{experiencia:6,categoria:{cat1:"informatica",cat2:"ingenieria"},jornada:"por horas"}
            }
        },
        {
            candidato:
            {
                id:7,
                personales:{imagen:"images/candidatos/usr7.jpg",nombre:"Luis", apellido:"Perez",edad:35,email:"perez@gmail.com",provincia:"pichincha"},
                estudios:{nivel:"bachiller", titulo:"bachiller", cursos:{curso:"informatica"}},
                laboral:{experiencia:8,categoria:{cat1:"informatica"},jornada:"medio tiempo"}
            }
        }
                      
    ];

    $scope.id = $stateParams.idPerfil;
    console.log($scope.id);
    
}])