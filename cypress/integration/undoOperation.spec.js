describe('Delete note', () => {
  const note = {
    id: '123456789',
    created: Date.now(),
    text: 'This is a test note.',
  }

  const deleteButtonFirstNote =
    'main section :first-child :first-child :nth-child(2) :first-child'

  beforeEach(() => {
    localStorage.setItem('NOTES', JSON.stringify([note]))
    cy.visit('/')
    cy.get(deleteButtonFirstNote)
      .first()
      .click()
  })

  it('does not have the test note', () => {
    cy.contains(note.text).should('not.exist')
  })

  it('undoes the delete', () => {
    cy.get('button')
      .first()
      .click()
    cy.contains(note.text).should('exist')
  })

  it('dismisses the undo dialog', () => {
    cy.get('header ~ section svg').click()
    cy.contains('Note deleted').should('not.exist')
  })
})
