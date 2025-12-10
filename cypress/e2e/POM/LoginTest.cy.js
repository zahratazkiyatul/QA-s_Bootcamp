import LoginPage from "./LoginPage";
import { loginData } from "./LoginData";

describe("Scenario Halaman Login - OrangeHRM", () => {

    it("TC01 - Login dengan username & password valid", () => {
        LoginPage.visit();
        LoginPage.typeUsername(loginData.valid.username);
        LoginPage.typePassword(loginData.valid.password);
        LoginPage.clickLogin();

        cy.get(".oxd-topbar-header-breadcrumb, .oxd-topbar-header-title", { timeout: 10000 })
          .should("be.visible");

        cy.url({ timeout: 10000 }).should("include", "dashboard");
    });

    it("TC02 - Username valid & password invalid", () => {
        LoginPage.visit();
        LoginPage.typeUsername(loginData.valid.username);
        LoginPage.typePassword(loginData.invalidPassword.password);
        LoginPage.clickLogin();

        LoginPage.elements.errorMessage()
            .should("contain.text", "Invalid credentials");
    });

    it("TC03 - Username invalid & password valid", () => {
        LoginPage.visit();
        LoginPage.typeUsername(loginData.invalidUsername.username);
        LoginPage.typePassword(loginData.valid.password);
        LoginPage.clickLogin();

        LoginPage.elements.errorMessage()
            .should("contain.text", "Invalid credentials");
    });

    it("TC04 - Username & password invalid", () => {
        LoginPage.visit();
        LoginPage.typeUsername(loginData.invalidBoth.username);
        LoginPage.typePassword(loginData.invalidBoth.password);
        LoginPage.clickLogin();

        LoginPage.elements.errorMessage()
            .should("contain.text", "Invalid credentials");
    });

    it("TC05 - Username kosong", () => {
        LoginPage.visit();
        LoginPage.typeUsername(loginData.emptyUsername.username); 
        LoginPage.clickLogin();

        LoginPage.elements.requiredMessageAll()
            .contains(/Required|required|This field is required/i)
            .should("exist");
    });

    it("TC06 - Password kosong", () => {
        LoginPage.visit();
        LoginPage.typeUsername(loginData.valid.username);
        LoginPage.typePassword(loginData.emptyPassword.password); 
        LoginPage.clickLogin();

        LoginPage.elements.requiredMessageAll()
            .contains(/Required|required|This field is required/i)
            .should("exist");
    });

    it("TC07 - Username & password kosong", () => {
        LoginPage.visit();
        LoginPage.typeUsername(loginData.emptyBoth.username);
        LoginPage.typePassword(loginData.emptyBoth.password);
        LoginPage.clickLogin();

        cy.get("body").then(($body) => {
            const matches = $body.text().match(/Required|required|This field is required/gi);
            if (matches && matches.length >= 2) {
                expect(matches.length).to.be.at.least(2);
            } else {
                LoginPage.elements.usernameInput().parents("div").first()
                    .find(".oxd-input-field-error-message, .oxd-text--error, .oxd-input-group__error").should("exist");
                LoginPage.elements.passwordInput().parents("div").first()
                    .find(".oxd-input-field-error-message, .oxd-text--error, .oxd-input-group__error").should("exist");
            }
        });
    });

});
