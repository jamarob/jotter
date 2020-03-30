import { putNotes, saveNotesToLocal } from '../../src/util/services'

describe('Delete note', () => {
  const note = {
    id: '5e7e6a93916cc409e1785c0f',
    text: 'This is a test note',
    created: '2020-03-27T21:05:23.667581Z',
    edited: '2020-03-27T21:05:23.667581Z',
  }

  const deleteButtonFirstNote = '[class^="Note__ActionLinks"] :first-child'

  before(() => {
    putNotes([note]).catch(() => saveNotesToLocal([note]))
    cy.visit('/')
  })
  after(() => putNotes([]).catch(() => null))

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
