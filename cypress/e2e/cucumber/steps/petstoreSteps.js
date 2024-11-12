import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let petId;

Given("I create a new pet with name {string} and status {string}", (name, status) => {
  cy.request("POST", "https://petstore.swagger.io/v2/pet", {
    id: Date.now(),
    name: name,
    status: status,
  }).then((response) => {
    expect(response.status).to.eq(200);
    petId = response.body.id;
  });
});

When("I update the pet status to {string}", (status) => {
  cy.request("PUT", `https://petstore.swagger.io/v2/pet`, {
    id: petId,
    status: status,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.status).to.eq(status);
  });
});

Then("I should be able to read the pet with updated status", () => {
  cy.request("GET", `https://petstore.swagger.io/v2/pet/${petId}`).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.status).to.eq("sold");
  });
});

Then("I should be able to delete the pet", () => {
  cy.request("DELETE", `https://petstore.swagger.io/v2/pet/${petId}`).then((response) => {
    expect(response.status).to.eq(200);
  });
});
