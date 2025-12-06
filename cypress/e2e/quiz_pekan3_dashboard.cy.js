describe("Scenario Halaman Dashboard", () => {
    it('TC-202-Widget My Actions menampilkan daftar tindakan', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.contains('My Actions').should('be.visible');
        cy.get('.oxd-icon-button').should('exist');  
    });
    it('TC-203-Chart Employee Distribution by Sub Unit tampil dan interaktif', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('canvas').eq(0).should('be.visible');
        cy.get('.oxd-chart-legend li').first().click({ force: true });
    });
    it('TC-204-Chart Employee Distribution by Location tampil dan interaktif', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('canvas').eq(1).should('be.visible');
        cy.get('.oxd-chart-legend li').last().click({ force: true });
    });
});
