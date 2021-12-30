describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the correct title', () => {
    cy.get('.navbar-brand').should((text) => {
      expect(text).to.have.text('Chris Stone');
    });
  });
})
