    var PizzaOrder = {
        total: 0,
        cheese: 0,
        pep: 0,
        chzPlus: function(amount) {
            if (isNaN(amount)){
                amount = 0;
            }
            this.cheese = this.cheese + amount;
            this.total = this.cheese * 1.00;
        },
        pepPlus: function(amount) {
            if (isNaN(amount)){
                amount = 0;
            }
            this.pep = this.pep + amount;
        }
    };


$(document).ready(function() {
    $("#order-form").submit(function(event) {
        event.preventDefault();

        var inputChz = $("input#cheese").val();
        var inputPep = $("input#pep").val();

        newPizza = Object.create(PizzaOrder);
        newPizza.chzPlus(parseInt(inputChz));
        // newPizza.pep = newPizza.pepPlus(inputPep);

        console.log(newPizza.cheese);



        $("#pizza-price").text("$" + newPizza.total + ".00");
        $("#pizza-price").show();
        $("#order-form").hide();
    });


});
