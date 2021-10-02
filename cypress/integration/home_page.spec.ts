describe('Home Page Tests', () => {
  it('should display Atlanta Code Camp banner ad', () => {
    cy.visit('http://localhost:4200');
    cy.get('.atlanta-code-camp-title').should('exist');
  })
})
