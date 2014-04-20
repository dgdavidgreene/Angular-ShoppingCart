/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../../shoppingcart/app/productList.js" />
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

    });
});