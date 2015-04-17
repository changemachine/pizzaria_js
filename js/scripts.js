var Pizza = {
    type: '',
    price: 0,
    pizzaPrice: function(type) {
        if (type === 'cheese') {
            price = "$1.10";
        } else if (type = 'pepperoni') {
            price = "$1.38";
        }
        this.price = ;
    }
};




jQuery(document).ready(function() {
    // $("#cheesePizza").focus();

    $("#pizza-form").submit(function(event) {

// GRAB INPUT


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
