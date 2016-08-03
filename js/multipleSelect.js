app.controller('multiSelectCtrl',['$scope',function($scope){
    console.log("Controlador multiSelectCtrl");
    $('#nivel_educacion').multiselect({
        numberDisplayed: 5
    });

    $('#nivel_educacion').multiselect({

        onChange: function(element, checked) {
            if (checked === true) {
                //action taken here if true
            }
            else if (checked === false) {
                //                if (confirm('Do you wish to deselect the element?')) {
                //                    //action taken here
                //                }
                //                else {
                //                    $("#example-multiple-selected").multiselect('select', element.val());
                //                }
            }
        }
    });

}])