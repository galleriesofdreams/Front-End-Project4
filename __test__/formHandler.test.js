// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler";
// The describe() function
describe("Testing the submit functionality", () => {
    // The test() function
    test("Testing the handleSubmit() function", () => {
           expect(handleSubmit).toBeDefined();
})});