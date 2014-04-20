/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../../shoppingcart/app/product.js" />
/// <reference path="../../shoppingcart/app/store.js" />

describe("store object", function () {
    
    it("should be instantiable", function () {
        var result = new store();
        expect(result).toBeDefined();
    });

    it("should be able to load products", function () {
        var result = new store();
        expect(result).hasOwnProperty("products");
        expect(result.products).toBeDefined();
        result = null;
    });

    it("should get a product", function () {
        var testStore = new store();
        expect(testStore).toBeDefined();
        var result = testStore.getProduct("WML");
        expect(result).toBeDefined();
        expect(result).hasOwnProperty("sku");
    });

    it("should have captions", function () {
        var testStore = new store();
        expect(testStore).toBeDefined();
        var result = testStore.dvaCaption;
        expect(result).toBeDefined();
    });
    
    it("should have a range of values", function () {
        var testStore = new store();
        expect(testStore).toBeDefined();
        var result = testStore.dvaRange;
        expect(result).toBeDefined();
    });
});