describe('Projects List Page', () => {
  beforeEach(() => {
    cy.visit('/portfolio');
  });

  it('should have an unordered list', () => {
    cy.get('ul').should('exist');
  });

  it.skip('should have 13 projects in the default list', () => {
    cy.get('app-item').should('have.length', 13);
    cy.get('#flexCheckDefault').should('not.be.checked');
  });

  it.skip('should have 6 projects in the filtered list', () => {
    cy.get('#flexCheckDefault').check({scrollBehavior: false});
    cy.get('app-item').should('have.length', 6);
    cy.get('#flexCheckDefault').should('be.checked');
  });

  it.skip('should have 13 projects after unfiltering again', () => {
    const filterCheckBox = cy.get('#flexCheckDefault');
    filterCheckBox.click({scrollBehavior: false});
    filterCheckBox.click({scrollBehavior: false});
    cy.get('app-item').should('have.length', 13);
    filterCheckBox.should('not.be.checked');
  });
});
