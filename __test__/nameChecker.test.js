// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker";
// The describe() function
describe("Testing the URL validity", () => {
    // The test() function
    test("Testing the checkForName() function", () => {
           expect(checkForName).toBeDefined();
})});