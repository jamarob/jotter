import { postNote, putNotes } from '../../src/util/services'

describe('Edit note', () => {
  const originalText = 'This is a test note.'
  const addedText = 'And this is an edit. '
  const editedText = addedText + originalText

  const editButtonFirstNote = '[class^="Note__ActionLinks"] :nth-child(2)'

  before(() => {
    cy.wrap(putNotes([]))
    cy.wrap(postNote({ text: originalText }))
  })
  after(() => cy.wrap(putNotes([])))

  beforeEach(() => {
    cy.visit('/')
    cy.get(editButtonFirstNote).click()
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
