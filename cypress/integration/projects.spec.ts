describe('Projects List Page', () => {
  beforeEach(() => {
    cy.visit('/portfolio');
  });

  it('should have 6 projects in the default list', () => {
    cy.get('ul').should('exist');
    cy.get('app-item').should('have.length', 12);
  });

  it('should have the expected language and platform lists', () => {
    cy.get(':nth-child(1) > .form-select').children('option').then(options => {
      const actual = [...options].map(o => o.value)
      expect(actual).to.deep.eq(['', 'C#', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'Markdown', 'PHP', 'TypeScript', 'XAML'])
    });
    cy.get(':nth-child(2) > .form-select').children('option').then(options => {
      const actual = [...options].map(o => o.value)
      expect(actual).to.deep.eq(['', 'Console', 'Mobile', 'Web', 'Windows'])
    });
  });

  it('should have 2 C# projects', () => {
    cy.get(':nth-child(1) > .form-select').select('C#', {force: true});
    cy.get('app-item').should('have.length', 2);
  });
});
