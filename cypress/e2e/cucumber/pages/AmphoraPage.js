class AmphoraPage {

  onAmphora() {
    cy.origin('https://amphora.net', () => {
      
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.wait(3000)
      cy.get('#menu-main-menu') 
        .trigger('mouseover');
        cy.get('#menu-main-menu') 
          .should('be.visible') 
          .within(() => {
            
            cy.contains('Symphony CTRM').should('exist'); 
            cy.contains('Alchemy CTRM').should('exist'); 
            cy.contains('VaR Module').should('exist');
            cy.contains('Trade confirmations manager').should('exist');
            cy.contains('Freight manager').should('exist');
            cy.contains('Claims manager').should('exist'); 
            cy.contains('Symphony Credit').should('exist'); 
          });
    });
  
  }
  
  clickNewsLetter(){
    cy.origin('https://amphora.net', () => {
      cy.get('#menu-main-menu') 
      .trigger('mouseover');
      cy.get('#menu-main-menu') 
        .should('be.visible')
        .within(() => {
          cy.contains('Newsletter sign-up').should('exist').click({force:true});
  
  });
  
  });
  
  cy.wait(3000);
  
  }
  
  newsLetterSignup(user){
  cy.origin(
    'https://amphora.net', 
    { args: { user } },  
    ({ user }) => {  
      cy.get('[name="contact[email]"]').type(user.email);
      cy.get('[name="contact[first_name]"]').type(user.first_name);
      cy.get('[name="contact[last_name]"]').type(user.last_name);
      cy.get('[type="submit"]').click();
      cy.wait(2000);
    }
  );
  }
  
  thankyouMessage(){
    cy.origin('https://amphora.net', () => {
    cy.get('.fs-notifier').should('be.visible')       
      .and('contain.text', 'Thank you for signing up for our newsletter.')
  
      .then((thankYouMessage) => {
        const messageText = thankYouMessage.text();
        cy.log('Captured Thank You message:', messageText);
      });
  });
  }
  }
  export default AmphoraPage;
  