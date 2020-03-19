describe('Search notes', () => {
  const Texts = [
    'Notiz1 @tagA',
    'Notiz2 @tagB',
    'Notiz3 @tagC',
    'Notiz4 @tagA',
    'Notiz5 @tagB @tagA',
    'Notiz6 @tagC',
    'Notiz7 @tagA @tagB',
    'Notiz8 @tagB',
    'Notiz9 @tagC @tagB',
    'Notiz10 @tagA',
  ]

  beforeEach(() => {
    Texts.forEach(text => {
      cy.visit('/add')
      cy.get('textarea').type(text)
      cy.get('button.save').click()
    })
  })

  it('searches for clicked tags', () => {
    cy.contains('@tagA')
      .first()
      .click({ force: true })
    cy.get('input[value="\'@tagA"]').should('exist')
    Texts.forEach(text => {
      const index = text.indexOf('@')
      const chunk = text.substring(0, index)
      if (text.includes('@tagA')) {
        cy.contains(chunk).should('exist')
      } else {
        cy.contains(chunk).should('not.exist')
      }
    })
  })

  it('searches the notes', () => {
    cy.get('input').type("'@tagA '@tagB")
    cy.get('footer section svg:last-child').click()
    Texts.forEach(text => {
      const index = text.indexOf('@')
      const chunk = text.substring(0, index)
      if (text.includes('@tagA') && text.includes('@tagB')) {
        cy.contains(chunk).should('exist')
      } else {
        cy.contains(chunk).should('not.exist')
      }
    })
  })
})
