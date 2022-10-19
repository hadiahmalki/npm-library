const toCamelCase = require('./index')


describe("should convert string into camelCasing", () => {
    test('buy-travel-plan-item should return buyTravelPlanItem', () => {
        const actualOutput = toCamelCase('buy-travel-plan-item', 'buy--travel-plan-item', 'buy - travel- plan  -item ')
        const expectedOutput = 'buyTravelPlanItem'
        expect(actualOutput).toBe(expectedOutput);
    });
});
