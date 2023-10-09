const checker = require('../checkFive');

describe("checkFive", function(){
    test("returns 'num is less than 5' when num < 5.", function() {
      let output = checker.checkFive(2);
      expect(output).toEqual("2 is less than 5.");
    });

    test("returns 'num is greater than 5' when num > 5.", function() {
        let output = checker.checkFive(8);
        expect(output).toEqual("8 is greater than 5.");
      });
      test("returns 'num is equal to 5' when num = 5.", function() {
        let output = checker.checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
      });
 });