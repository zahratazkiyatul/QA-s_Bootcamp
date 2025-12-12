class ForgotPasswordPage {

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    }

    elements = {
        usernameField: () => cy.get('input[name="username"]'),
        resetBtn: () => cy.get('button[type="submit"]'),
        cancelBtn: () => cy.contains('Cancel'),
        successMessage: () => cy.contains('Reset Password link sent successfully'),
        requiredError: () => cy.get('.oxd-input-field-error-message')
    };

    submit(username) {
        this.elements.usernameField().clear().type(username);
        this.elements.resetBtn().click();
    }
}

export default new ForgotPasswordPage();
