describe('Projects List Page', () => {
  beforeEach(() => {
    cy.visit('/portfolio');
  });

  it('should have 6 projects in the default list', () => {
    cy.get('ul').should('exist');
    cy.get('app-item').should('have.length', 6);
  });

  it('should have the expected language and platform lists', () => {
    cy.get(':nth-child(2) > .form-select').children('option').then(options => {
      const actual = [...options].map(o => o.value)
      expect(actual).to.deep.eq(['', 'C#', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'PHP', 'TypeScript', 'XAML'])
    });
    cy.get(':nth-child(3) > .form-select').children('option').then(options => {
      const actual = [...options].map(o => o.value)
      expect(actual).to.deep.eq(['', 'Android', 'Angular', 'WPF', 'Web', 'Windows'])
    });
  });

  it('should have 1 C# project', () => {
    cy.get(':nth-child(2) > .form-select').select('C#', {force: true});
    cy.get('app-item').should('have.length', 1);
  });
});
