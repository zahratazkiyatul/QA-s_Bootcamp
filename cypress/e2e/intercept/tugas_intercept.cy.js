describe('Quiz 3 - Login + Dashboard Intercepts FIXED', () => {

  const baseUrl = 'https://opensource-demo.orangehrmlive.com';

 
  it('TC-001 - Intercept Action Summary', () => {

    cy.intercept('GET', '**/employees/action-summary*').as('actionSummary');

    cy.visit(baseUrl);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@actionSummary', { timeout: 15000 })   
    .its('response.statusCode')
    .should('eq', 200);

  });

  it('TC-002 - Intercept Time at Work', () => {

    cy.intercept('GET', '**/employees/time-at-work*').as('timeWork');

    cy.visit(baseUrl);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@timeWork')
      .its('response.statusCode')
      .should('eq', 200);
  });

  it('TC-003: Login berhasil + intercept "Employee on Leave Today"', () => {
    cy.intercept('GET', '**/api/**/dashboard/employees/leave*').as('leaveToday');

    cy.visit(baseUrl);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@leaveToday', { timeout: 15000 })
      .its('response.statusCode')
      .should('eq', 200);
});


  it('TC-004 - Intercept Employee Distribution by Location', () => {

    cy.intercept('GET', '**/employees/locations*').as('locationChart');

    cy.visit(baseUrl);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@locationChart')
      .its('response.statusCode')
      .should('eq', 200);
  });

    it('TC-005: Login berhasil + intercept "Employee Distribution by Sub Unit"', () => {
    cy.intercept('GET', '**/api/**/dashboard/employees/subunit*').as('subunitChart');

    cy.visit(baseUrl);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@subunitChart', { timeout: 15000 })
      .its('response.statusCode')
      .should('eq', 200);
  });
});
