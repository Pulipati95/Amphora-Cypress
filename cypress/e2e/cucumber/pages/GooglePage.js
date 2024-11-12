
class GooglePage {
  visit() {
    cy.visit("https://www.google.com/");
  }
  
  searchFor() {
    cy.get('#APjFqb').type('Amphora{enter}');    
  }

clickAmphoraLink() {

  cy.contains('Amphora CTRM').scrollIntoView().should('be.visible').click();
    
  cy.origin('https://amphora.net', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
}

}
export default GooglePage;

