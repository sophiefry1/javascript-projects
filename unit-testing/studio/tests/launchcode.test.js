// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
test("CheckOrganization" , function() {
  expect(launchcode.organization).toBe("nonprofit")
});
 
test("Executive Director" , function() {
  expect(launchcode.ExecutiveDirector).toBe("Jeff")
});

test("percentageCoolEmployees" , function() {
  expect(launchcode.percentageCoolEmployees).toBe(100)
});

test("programsOffered" , function() {
  expect(launchcode.programsOffered).toContain("Web Development");
  expect(launchcode.programsOffered).toContain("Data Analysis");
  expect(launchcode.programsOffered).toContain("Liftoff");
  expect(launchcode.programsOffered.length).toBe(3)
});

test("only divisible by 2" , function() {
  expect(launchcode.launchcodeOutput(2)).toBe("Launch!")
});
 
test("only divisible by 3" , function() {
expect(launchcode.launchcodeOutput(3)).toBe("Code!")
});

test("only divisible by 5" , function() {
  expect(launchcode.launchcodeOutput(5)).toBe("Rocks!")
});

test("only divisible by 2 AND 3" , function() {
expect(launchcode.launchcodeOutput(6)).toBe("LaunchCode!")
});

test("only divisible by 3 AND 5" , function() {
expect(launchcode.launchcodeOutput(15)).toBe("Code Rocks!")
});

test("only divisible by 2 AND 5" , function() {
expect(launchcode.launchcodeOutput(10)).toBe("Launch Rocks!")
});

test("only divisible by 2, 3 AND 5" , function(){
expect(launchcode.launchcodeOutput(30)).toBe("LaunchCode Rocks")
});

test("")

 

  // Write your unit tests here!
  
});