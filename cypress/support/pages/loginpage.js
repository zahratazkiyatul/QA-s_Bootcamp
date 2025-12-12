class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    elements = {
        username: () => cy.get('input[name="username"]'),
        password: () => cy.get('input[name="password"]'),
        loginBtn: () => cy.get('button[type="submit"]'),
        alertError: () => cy.get('.oxd-alert-content-text'),
        requiredError: () => cy.get('.oxd-input-field-error-message'),
        forgotPasswordLink: () => cy.contains('Forgot your password?')
    };

    login(username, password) {
        this.elements.username().clear().type(username);
        this.elements.password().clear().type(password);
        this.elements.loginBtn().click();
    }
}

export default new LoginPage();
