describe ('Scenario Login', () => {
    it('TC-001 - Login dengan username & password valid', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', 'inventory')
    })
    it('TC-002 - Login dengan username & password invalid', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface')
    })
})
 