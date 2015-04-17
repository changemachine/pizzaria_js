var orderTotal = 0;

var PizzaOrder = {
    total: 0,
    cheese: 0,
    pep: 0,
    chzPlus: function(amount) {
        if (isNaN(amount)){
            amount = 0;
        }
        this.cheese = this.cheese + amount;
        orderTotal += this.cheese * 1.00;
    },
    pepPlus: function(amount) {
        if (isNaN(amount)){
            amount = 0;
        }
        this.pep = this.pep + amount;
        orderTotal += this.pep * 40.00;
    }
};


$(document).ready(function() {
    $("#order-form").submit(function(event) {
        event.preventDefault();

        var inputChz = $("input#cheese").val();
        var inputPep = $("input#pep").val();

        newPizza = Object.create(PizzaOrder);
        newPizza.total = orderTotal;
        newPizza.chzPlus(parseInt(inputChz));
        newPizza.pepPlus(parseInt(inputPep));

        console.log(orderTotal);



        $("#pizza-price").text("$" + orderTotal + ".00");
        $("#pizza-price").show();
        // $("#order-form").hide();
    });


});
