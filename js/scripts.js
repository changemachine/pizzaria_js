    var PizzaOrder = {
        total: 0,
        cheese: 0,
        pepp: 0,
        cheesePlus: function(amount) {
            this.cheese = this.cheese + amount;
        },
        peppPlus: function(amount) {
            this.pepp = this.pepp + amount;
        }
    };


$(document).ready(function() {
    $("#order-form").submit(function(event) {
        event.preventDefault();

        var pizzaType = $('select#pizza-type').val();

        console.log(pizzaType);//--------!

        newPizza = Object.create(PizzaOrder);
        newPizza.cheese = $('select#pizza-type').val();




        $("#pizza-price").text(newPizza.total);
        $("#pizza-price").show();
        $("#order-form").hide();
    });


});
