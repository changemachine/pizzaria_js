describe("PizzaOrder", function() {
    describe("chzPlus", function() {
        it("returns a total: 1 for 1 cheese pizza", function() {
            var testPizzaOrder = Object.create(PizzaOrder);
            testPizzaOrder.chzPlus(1);
            expect(testPizzaOrder.total).to.equal(1);
        });
    });


});
