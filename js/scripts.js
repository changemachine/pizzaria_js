var Pizza = {
    type: '',
    pizzaPrice: function(type) {
        if (type === 'cheese') {
            return "$1.00";
        } else if (type = 'pepperoni') {
            return "$1.38";
        }
    }
};




jQuery(document).ready(function() {
    $("#topping1").focus();

    $("#triangle-sides").submit(function(event) {

// GRAB INPUT

        // get'em: var ___ = doc.getElsByCLASSname('class'),
        // load'em: sides = [].map.call(sides_input, func( input ) { return input.value; });
        //var sides_input = document.getElementsByClassName( 'sides' ),
        //     sides  = [].map.call(sides_input, function( input ) {
        //         return input.value;
        // });

// OPERATE ON INPUT
    var theResults = functionName(input);

// DISPLAY RESULTS
        $('#dispayElement').html("<h1><span>" + variableName + "</span></h1>");



        $("#result").show();
        event.preventDefault();
    });
});
