describe('The ButtonComponent', () => {
  it('Checks that the button element exists and is visible', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-button--default-button&viewMode=story'
    );
    cy.get('app-button').should('exist');
    cy.get('app-button').should('be.visible');
  });
});
