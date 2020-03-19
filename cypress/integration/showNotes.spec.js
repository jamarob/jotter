describe('Show notes', () => {
  it('shows no notes when storage is empty', () => {
    cy.visit('/')
    cy.get('p')
      .contains('No notes found...')
      .should('exist')
  })

  it('shows all the notes in storage', () => {
    cy.fixture('notes')
      .then(notes => {
        localStorage.setItem('NOTES', JSON.stringify(notes))
        return notes.length
      })
      .then(length => {
        cy.visit('/')
        cy.contains('No notes found...').should('not.exist')
        cy.get(`main section > :nth-child(${length})`).should('exist')
      })
  })
})
