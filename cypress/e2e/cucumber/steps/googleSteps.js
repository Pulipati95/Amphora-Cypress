import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import GooglePage  from "../pages/googlePage";
import AmphoraPage from "../pages/amphoraPage";

const google = new GooglePage();
const amphora = new AmphoraPage();
let userData;

before(() => {
  cy.fixture('userData').then((data) => {
    userData = data;
  });
});

Given("I am on the Google homepage", () => {
  google.visit();
});

When("I search for Amphora", () => {
  google.searchFor();
});

When("I click on the {string} link", () => {
  google.clickAmphoraLink();
});

Then("I should be on the Amphora website", () => {
  amphora.onAmphora();
});


When("I click newsletter", () => {
  amphora.clickNewsLetter();
});

Then("I am on newsletter page", ()=>{
  amphora.newsLetterSignup(userData);
})

Then("I should see a confirmation message Thank you for signing up for our newsletter", ()=>{
  amphora.thankyouMessage();

  });


