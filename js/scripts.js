    var Pizza = {
        price: 0,
        pizzaType: '',
        pizzaPrice: function(type) {
            console.log(type);
            if (type === 'cheese') {
                this.price = 1.10;
            } else if(type === 'pepperoni') {
                this.price = 1.30;
            }
        }
    };

$(document).ready(function() {
    $("#order-form").submit(function(event) {
        event.preventDefault();
        var pizzaType = $('select#pizza-type');

        console.log(pizzaType);//--------!

        newPizza = Object.create(Pizza);
        newPizza.pizzaType = pizzaType;

        $("#pizza-price").text(newPizza.price.toLocaleString());
        $("#pizza-price").show();
        $("#order-form").hide();
    });
debugger;

});
