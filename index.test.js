const toCamelCase = require('./index')


it("should convert string into camelCasing", () => {
    test('convert-to-camel-casing should return ConvertToCamelCasing', () => {
        const actualOutput = toCamelCase('convert-to-camel-casing')
        const expectedOutput = convertToCamelCasing
        expect(actualOutput).toBe(expectedOutput);
    });
});
