import ForgotPasswordPage from '../../support/pages/forgotpassword';

describe('Forgot Password Feature', () => {

    beforeEach(() => {
        ForgotPasswordPage.visit();
    });

    it('TC01 - Successful Forgot Password (robust, simple)', () => {
        ForgotPasswordPage.visit();
        ForgotPasswordPage.elements.usernameField().clear().type('Admin');
        ForgotPasswordPage.elements.resetBtn().click();
        cy.contains(/reset password link sent successfully|reset password link|link sent|success|sent/i, { timeout: 10000 })
            .should('be.visible');
        });

    it('TC02 - Invalid Username', () => {
        ForgotPasswordPage.submit('TidakAdaUser');
        cy.contains('Reset Password link').should('be.visible');
    });

    it('TC03 - Cancel Button', () => {
        ForgotPasswordPage.elements.cancelBtn().click();
        cy.url().should('include', '/auth/login');
    });

    it('TC04 - Empty Username', () => {
        ForgotPasswordPage.elements.usernameField().clear();
        ForgotPasswordPage.elements.resetBtn().click();
        ForgotPasswordPage.elements.requiredError()
            .should('contain', 'Required');
    });

});
