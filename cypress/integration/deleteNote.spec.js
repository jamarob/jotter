describe('Delete note', () => {
  const note = {
    id: '123456789',
    created: Date.now(),
    text: 'This is a test note.',
  }

  const deleteButtonFirstNote = '[class^="Note__ActionLinks"] :first-child'

  beforeEach(() => {
    localStorage.setItem('NOTES', JSON.stringify([note]))
    cy.visit('/')
  })

  it('has the test note', () => {
    cy.contains(note.text).should('exist')
  })

  it('deletes the note', () => {
    cy.get(deleteButtonFirstNote)
      .first()
      .click()
    cy.contains(note.text).should('not.exist')
  })
})
