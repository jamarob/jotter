import { putNotes, saveNotesToLocal } from '../../src/util/services'

describe('Edit note', () => {
  const note = {
    id: '5e7e6a93916cc409e1785c0f',
    text: 'This is a test note',
    created: '2020-03-27T21:05:23.667581Z',
    edited: '2020-03-27T21:05:23.667581Z',
  }

  const addedText = 'And this is an edit. '
  const editedText = addedText + note.text

  beforeEach(() => {
    putNotes([note]).catch(() => saveNotesToLocal([note]))
    cy.visit('/')
    cy.get('button[title="edit"]')
      .first()
      .click()
  })
  afterEach(() => putNotes([]).catch(() => null))

  it('does not change the note on cancel', () => {
    cy.get('textarea').type(addedText)
    cy.get('button')
      .contains('cancel')
      .click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/notes')
    })
    cy.contains(editedText).should('not.exist')
  })

  it('does change the note on save', () => {
    cy.get('textarea').type(addedText)
    cy.get('button')
      .contains('save')
      .click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/notes')
    })
    cy.contains(editedText).should('exist')
  })
})
