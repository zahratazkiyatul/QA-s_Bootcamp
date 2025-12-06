describe('Fitur Login', () => {
  it('Test Function Login With Valid Credentials', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com');

    cy.get('h1').contains('CURA Healthcare Service').should('have.text','CURA Healthcare Service');

    cy.get('#btn-make-appointment').click();
  })
})