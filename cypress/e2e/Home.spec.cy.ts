describe('Home - User exists', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('not should be able to click the button', () => {
    cy.get('button[type="submit"]').should('be.disabled')
  })
  it('should be able to type in the input and to click the button after type in this input', () => {
    cy.get('input[data-testid="input"]').type('renantrs')
    cy.get('button[type="submit"]').click()
    cy.get('img[alt="Loading"]')
    cy.get('img[data-testid="avatar-user"]')
    cy.get('span').should('contain.text', 'Renan Souza')
  })
})

describe('Home - User not exists', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to type a fake user in the input and to click the button and finally show message that the user not exists', () => {
    cy.get('input[data-testid="input"]').type('kjfkldsjfkljsdklfjkl')
    cy.get('button[type="submit"]').click()
    cy.get('img[alt="Loading"]')
    cy.get('span').should('contain.text', 'Usuário não encontrado')
  })
})
