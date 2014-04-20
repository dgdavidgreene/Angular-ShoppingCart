/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../../shoppingcart/app/product.js" />
/// <reference path="../../shoppingcart/app/store.js" />

describe("store object", function () {
    
    beforeEach(function () {
        testStore = new store();
    });

    it("should be able to load products", function () {
        expect(testStore).hasOwnProperty("products");
        expect(testStore.products).toBeDefined();
        result = null;
    });

    it("should get a product", function () {
        expect(testStore).toBeDefined();
        var result = testStore.getProduct("WML");
        expect(result).toBeDefined();
        expect(result).hasOwnProperty("sku");
    });

    it("should have captions", function () {
        expect(testStore).toBeDefined();
        var result = testStore.dvaCaption;
        expect(result).toBeDefined();
    });
    
    it("should have a range of values", function () {
        expect(testStore).toBeDefined();
        var result = testStore.dvaRange;
        expect(result).toBeDefined();
    });
});