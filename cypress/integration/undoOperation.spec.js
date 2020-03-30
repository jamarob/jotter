import { putNotes, saveNotesToLocal } from '../../src/util/services'

describe('Undo operation', () => {
  const note = {
    id: '5e7e6a93916cc409e1785c0f',
    text: 'This is an undo delete test note',
    created: '2020-03-27T21:05:23.667581Z',
    edited: '2020-03-27T21:05:23.667581Z',
  }

  beforeEach(() => {
    putNotes([note]).catch(() => saveNotesToLocal([note]))
    cy.visit('/')
    cy.get('button[title="delete"]')
      .first()
      .click()
  })

  afterEach(() => putNotes([]).catch(() => null))

  it('does not have the test note', () => {
    cy.contains(note.text).should('not.exist')
  })

  it('undoes the delete', () => {
    cy.get('button[title="close"]')
      .first()
      .click()
    cy.contains(note.text).should('exist')
  })

  it('dismisses the undo dialog', () => {
    cy.get('header ~ section svg').click()
    cy.contains('Note deleted').should('not.exist')
  })
})
