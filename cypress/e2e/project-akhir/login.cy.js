import LoginPage from '../../support/pages/loginpage';

describe('Login Feature', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('TC01 - Successful Login', () => {
    LoginPage.login('Admin', 'admin123');

    cy.url().should('include', '/dashboard');
    
    cy.contains('Dashboard').should('be.visible');
});

    it('TC02 - Invalid Password', () => {
        LoginPage.login('Admin', 'wrongpass');
        LoginPage.elements.alertError().should('contain', 'Invalid credentials');
    });

    it('TC03 - Invalid Username', () => {
        LoginPage.login('WrongUser', 'admin123');
        LoginPage.elements.alertError().should('contain', 'Invalid credentials');
    });

    it('TC04 - Empty Username', () => {
        LoginPage.login(' ', 'admin123');
        LoginPage.elements.requiredError().should('contain', 'Required');
    });

    it('TC05 - Empty Password', () => {
        LoginPage.login('Admin', ' ');
        LoginPage.elements.requiredError().should('contain', 'Required');
    });

    it('TC06 - Both Fields Empty', () => {
        LoginPage.login(' ', ' ');
        LoginPage.elements.requiredError().should('contain', 'Required');
    });

    it('TC07 - Check Forgot Password Link', () => {
        LoginPage.elements.forgotPasswordLink().click();
        cy.url().should('include', 'requestPasswordResetCode');
    });

    it('TC08 - Page UI Check', () => {
        LoginPage.elements.username().should('be.visible');
        LoginPage.elements.password().should('be.visible');
        LoginPage.elements.loginBtn().should('be.visible');
    });

});
