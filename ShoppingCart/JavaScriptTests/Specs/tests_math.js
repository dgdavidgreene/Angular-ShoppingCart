/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../Specs/Math.js" />

describe("math.add", function () {
    
    it("should add two positive numbers", function () {
        var result = new Math().add(2, 3);
        expect(result).toBe(5);
    });
});

