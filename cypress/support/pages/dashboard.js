class DashboardPage {

    elements = {
        dashboardTitle: () => cy.contains('Dashboard'),
        timeAtWork: () => cy.contains('Time at Work'),
        myActions: () => cy.contains('My Actions'),
        quickLaunch: () => cy.contains('Quick Launch'),
        buzzPosts: () => cy.contains('Buzz Latest Posts')
    };

}

module.exports = new DashboardPage();
