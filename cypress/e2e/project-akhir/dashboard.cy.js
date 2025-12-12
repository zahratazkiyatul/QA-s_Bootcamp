import DashboardPage from '../../support/pages/dashboard';

describe('Dashboard Feature', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
    });

    it('TC01 - Dashboard Page Loaded Successfully', () => {
        DashboardPage.elements.dashboardTitle().should('be.visible');
    });

    it('TC02 - All Widget Titles Visible', () => {
        DashboardPage.elements.timeAtWork().should('be.visible');
        DashboardPage.elements.myActions().should('be.visible');
        DashboardPage.elements.quickLaunch().should('be.visible');
        DashboardPage.elements.buzzPosts().should('be.visible');
    });

    it('TC03 - Sidebar Navigation Visible', () => {
        cy.get('.oxd-navbar-nav').should('be.visible');
    });

    it('TC04 - User Profile Dropdown Can Be Opened', () => {
        cy.get('.oxd-userdropdown-tab').click();
        cy.contains('Logout').should('be.visible');
    });

    it('TC05 - Quick Launch Buttons Are Visible', () => {
        cy.get('.orangehrm-quick-launch').should('be.visible');
    });

    it('TC06 - Time at Work Widget Content Exists', () => {
        cy.contains('Time at Work').parent().should('be.visible');
    });

    it('TC07 - My Actions Widget Content Exists', () => {
        cy.contains('My Actions').parent().should('be.visible');
    });

    it('TC08 - Buzz Latest Posts Widget Loaded', () => {
        cy.contains('Buzz Latest Posts').should('be.visible');
    });

});
