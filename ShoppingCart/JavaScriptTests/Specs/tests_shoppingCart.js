/// <reference path="../scripts/jquery.1.7.1.min.js" />

/*/// <reference path="../scripts/angular.1.0.5.min.js" />*/
/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../scripts/jasmine-jquery.js" />
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

    it("should be able to convert NaN toNumber 0", function () {
        var result = testCart.toNumber("a");
        expect(result).toBeDefined();
        expect(result).toBe(0);
    });

    it("should be able to save items, but is now a MOCK", function () {
        testCart.saveItems();
        
    });

    /*
    addItem = function (sku, name, price, quantity)
    */
    it("should be able to addItem", function () {
        testCart.addItem("testSku", "testName", 99.99, 999);
        var result = testCart.items[0];
        expect(result.sku).toBe("testSku");
        expect(result.name).toBe("testName");
        expect(result.price).toBe(99.99);
        expect(result.quantity).toBe(999);
    });

    it("should be able to addItem for additional quantities", function () {
        testCart.addItem("testSku", "testName", 99.99, 999);
        testCart.addItem("testSku", "testName", 99.99, 99);
        var result = testCart.items[0];
        expect(result.sku).toBe("testSku");
        expect(result.name).toBe("testName");
        expect(result.price).toBe(99.99);
        expect(result.quantity).toBe(999 + 99);
    });

    it("should be able to addItem for multiple items", function () {
        testCart.addItem("testSku", "testName", 99.99, 999);
        testCart.addItem("testSku2", "testName2", 9.99, 99);
        var result = testCart.items[0];
        expect(result.sku).toBe("testSku");
        expect(result.name).toBe("testName");
        expect(result.price).toBe(99.99);
        expect(result.quantity).toBe(999);
        var result2 = testCart.items[1];
        expect(result2.sku).toBe("testSku2");
        expect(result2.name).toBe("testName2");
        expect(result2.price).toBe(9.99);
        expect(result2.quantity).toBe(99);
    });

    it("should be able to addItem for multiple items and be cleared", function () {
        testCart.addItem("testSku", "testName", 99.99, 999);
        testCart.addItem("testSku2", "testName2", 9.99, 99);
        var resultBeforeClear = testCart.items;
        expect(resultBeforeClear.length).toBe(2);
        testCart.clearItems();
        var resultAfterClear = testCart.items;
        expect(resultAfterClear.length).toBe(0);
    });

    it("should be able to addCheckoutParameters", function () {
        testCart.addCheckoutParameters("Google", "500640663394527",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        });
    });

    it("should throw on addCheckoutParameters with a bad serviceName", function () {
        expect(function() {
            testCart.addCheckoutParameters("Goggle", "500640663394527",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        });
        }).toThrow("serviceName must be 'PayPal' or 'Google'.");
    });

    it("should throw on addCheckoutParameters with missing merchantID", function () {
        expect(function () {
            testCart.addCheckoutParameters("Google", null,
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        });
        }).toThrow("A merchantID is required in order to checkout.");
    });

    it("should throw if null servicename on checkout", function () {
        expect(function () {
            testCart.checkout(null, false);
        }).toThrow("Use the 'addCheckoutParameters' method to define at least one checkout service.");
    });

    it("should throw if incorrect servicename on checkout", function () {
        expect(function () {
            testCart.checkout("Goggle", false);
        }).toThrow("Cannot get checkout parameters for 'Goggle'.");
    });

    it("should be able to get correct getTotalPrice", function () {
        testCart.addItem("testSku", "testName", 99.99, 999);
        testCart.addItem("testSku", "testName", 99.99, 999);
        var result = testCart.items[0];
        expect(result.sku).toBe("testSku");
        expect(testCart.getTotalPrice("testSku")).toBe(199780.02);
    });

    it("should be able to get correct getTotalCount", function () {
        testCart.addItem("testSku", "testName", 99.99, 999);
        var result = testCart.items[0];
        expect(result.sku).toBe("testSku");
        expect(testCart.getTotalCount("testSku")).toBe(999);
    });
    
    it("should be able to have nothing happen when addFormFields gets null data", function () {
        var form = "<form/></form>";
        testCart.addFormFields(form, null );
    });

    it("should be able to use jasmine-jquery", function () {
        expect('<input type="submit" disabled="disabled" />').toBeDisabled();
        expect($('<div><span class="some-class"></span></div>')).toContainElement('span.some-class');
        expect($('<div><span class="some-class"></span></div>')).toContainHtml('<span class="some-class"></span>');
        expect($('<div><span class="some-class">Some Text</span></div>')).toContainText('Some Text');
        expect($('<input type="text" value="some text"/>')).toHaveValue('some text');
    });


    it("should be able to have nothing happen when addFormFields gets mock form", function () {
        var data = [{ "sku": "testSku", "name": "testName", "price": 99.99, "quantity": 999 }, { "sku": "testSku2", "name": "testName2", "price": 9.99, "quantity": 99 }];
        var form = $('<form></form>');
        expect(form).toEqual('form');
        var testForm = form;
        //expect(form).toHandle("submit")
        testForm.attr("id", "testForm");
        expect(testForm.attr("id")).toEqual("testForm");
        testCart.addFormFields(form, data);
        expect(form).toContainElement("input");
        expect(form.find("input")).toHaveAttr("type", "hidden");
        //expect(form.find("input")).toHaveData("sku", "testSku2");
        $.each(data, function (name, value) {
            if (value != null) {
                var input = $("<input></input>").attr("type", "hidden").attr("name", name).val(value);
                testForm.append(input);
            }
        });
        expect(form.data()).toBe(testForm.data());//{}
        /* 
        toHaveClass(className)
        toHaveData(key, value)
        toHaveAttr(attributeName, attributeValue)
        var result0 = $("#testForm input").eq(0);
        var result1 = $("#testForm input").eq(1);
        var result2 = form.find("#testForm");
        expect(result2).toBe("h");
        expect(result1).toBeDefined();
        expect(result2).toBeDefined();*/
    });

});