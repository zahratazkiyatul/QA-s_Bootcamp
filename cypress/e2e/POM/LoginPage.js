class LoginPage {
    elements = {
        usernameInput: () => cy.get("input[placeholder='Username']"),
        passwordInput: () => cy.get("input[placeholder='Password']"),
        loginButton: () => cy.get("button[type='submit']"),
        errorMessage: () => cy.get(".oxd-alert-content.oxd-alert-content--error"),
        requiredMessageAll: () => cy.get(".oxd-input-field-error-message, .oxd-text--error, .oxd-input-group__error, span.oxd-input-field-error-message"),
    }

    visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    typeUsername(username) {
        if (username === "") {
            this.elements.usernameInput().clear();
        } else {
            this.elements.usernameInput().clear().type(username);
        }
    }

    typePassword(password) {
        if (password === "") {
            this.elements.passwordInput().clear();
        } else {
            this.elements.passwordInput().clear().type(password);
        }
    }

    clickLogin() {
        this.elements.loginButton().click();
    }
}

export default new LoginPage();
