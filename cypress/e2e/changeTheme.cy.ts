describe('Home/Profile - Change theme', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able change the theme', () => {
    cy.get('input[data-testid="input"').type('renantrs')
    cy.get('button[type="submit"').click()
    cy.get('img[alt="Loading"]')
    cy.get('button[type="button"').click()
  })
})
