/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../../shoppingcart/app/shoppingCart.js" />


describe("shoppingCart", function () {
    var testCart;
    beforeEach(function () {
        testCart = new shoppingCart("TestStore");
    });

    it("should have the correct cartName", function () {
        expect(testCart).hasOwnProperty("cartName");
        var name = testCart.cartName;
        expect(name).toBe("TestStore")
    });

    it("should be able to create CheckoutParameters", function () {
        var result = new checkoutParameters("PayPal", "bernardo.castilho-facilitator@gmail.com", "testOptions");
        expect(result).toBeDefined();
        expect(result.serviceName).toBe("PayPal"); 
        expect(result.merchantID).toBe("bernardo.castilho-facilitator@gmail.com");
        expect(result.options).toBe("testOptions");
    });

    it("should be able to create cartItem", function () {
        var result = new cartItem("testSku", "testName", 99.99, 999);
        expect(result.sku).toBe("testSku");
        expect(result.name).toBe("testName");
        expect(result.price).toBe(99.99);
        expect(result.quantity).toBe(999);
    });
    
    it("should be able to convert a number toNumber", function () {
        var result = testCart.toNumber(1);
        expect(result).toBeDefined();
        expect(result).toBe(1);
    });

    it("should be able to convert text toNumber 0", function () {
        var result = testCart.toNumber("a");
        expect(result).toBeDefined();
        expect(result).toBe(0);
    });

});