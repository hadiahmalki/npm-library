const toCamelCase = require('./index')


describe("should convert string into camelCasing", () => {
    test('buy-travel-plan-item should return buyTravelPlanItem', () => {
        const actualOutput = toCamelCase('buy-travel-plan-item')
        const expectedOutput = 'buyTravelPlanItem'
        expect(actualOutput).toBe(expectedOutput);
    });
    test('if the parameter was empty it should return empty string', () => {
        const actualOutput = toCamelCase("")
        const expectedOutput = ""
        expect(actualOutput).toBe(expectedOutput);
    });
    test('buy_travel_plan_item should return buyTravelPlanItem', () => {
        const actualOutput = toCamelCase('buy_travel_plan_item')
        const expectedOutput = 'buyTravelPlanItem'
        expect(actualOutput).toBe(expectedOutput);
    });
    test('Buy-Travel-Plan-Item should return BuyTravelPlanItem', () => {
        const actualOutput = toCamelCase('Buy-Travel-Plan-Item')
        const expectedOutput = 'BuyTravelPlanItem'
        expect(actualOutput).toBe(expectedOutput);
    });
    test('Buy-Travel-Plan-Item should return BuyTravelPlanItem', () => {
        const actualOutput = toCamelCase('Buy-Travel-Plan-Item')
        const expectedOutput = 'BuyTravelPlanItem'
        expect(actualOutput).toBe(expectedOutput);
    });
    test('if parameter is a number should throw an error', () => {
        expect(() => toCamelCase(26)).toThrow('parameter should be string');
    });
});
