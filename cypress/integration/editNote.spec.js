describe('Edit note', () => {
  const originalNote = {
    id: '123456789',
    created: Date.now(),
    text: 'This is a test note.',
  }

  const addedText = 'And this is an edit. '
  const editedText = addedText + originalNote.text

  beforeEach(() => {
    localStorage.setItem('NOTES', JSON.stringify([originalNote]))
    cy.visit('/')
    cy.get('a[href="/edit/123456789"]').click()
  })

  it('does not change the note on cancel', () => {
    cy.get('textarea').type(addedText)
    cy.get('button.cancel').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/notes')
    })
    cy.contains(editedText).should('not.exist')
  })

  it('does change the note on save', () => {
    cy.get('textarea').type(addedText)
    cy.get('button.save').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/notes')
    })
    cy.contains(editedText).should('exist')
  })
})
