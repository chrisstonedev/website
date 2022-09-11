describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the correct title', () => {
    cy.get('.header-name').should('contain.text', 'Chris Stone');
  });
});
