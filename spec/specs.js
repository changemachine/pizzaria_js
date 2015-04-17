describe("PizzaOrder", function() {
    describe("pizzaPrice", function() {
        it("returns 1.10 for a cheese pizza", function() {
            var testPizza = Object.create(PizzaOrder);
            testPizza.pizzaPrice('cheese');
            expect('cheese').to.equal(1.10);
        });
    });

    describe("pizzaPrice", function() {
        it("returns 1.30 for a pepperoni pizza", function() {
            var testPizza = Object.create(PizzaOrder);
            testPizza.withdraw(1.30);
            expect(testPizza.balance).to.equal(1.30);
        });
    });

});
