describe("Scenario Halaman Login", () => {
    it('TC-101-Login dengan username dan password valid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include','dashboard')
    })
    it('TC-102-Login dengan username valid dan password invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin124');
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    })
    it('TC-103-Login dengan username invalid dan password valid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('input[name="username"]').type('Adminz');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    })
    it('TC-104-Login dengan username invalid dan password invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('input[name="username"]').type('Adminzz');
        cy.get('input[name="password"]').type('admin1234');
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    })
    it('TC-105-Login dengan username kosong dan password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('input[name="username"]').clear();
        cy.get('input[name="password"]').clear();
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-input-field-error-message').should('have.length', 2)
        cy.get('.oxd-input-field-error-message').first().should('contain', 'Required')
        cy.get('.oxd-input-field-error-message').last().should('contain', 'Required')

    })
})