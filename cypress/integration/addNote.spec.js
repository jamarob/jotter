import { putNotes } from '../../src/util/services'

describe('Add note', () => {
  before(() => putNotes([]).catch(() => null))

  after(() => putNotes([]).catch(() => null))

  beforeEach(() => {
    cy.visit('/')
    cy.get('button[title="add"]').click()
  })
  it('goes to the add page', () => {
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/add')
    })
  })

  it('focusses the textarea', () => {
    cy.get('textarea').should('be.focused')
  })

  it('goes to /notes and does not add a note on cancel', () => {
    cy.get('button')
      .contains('cancel')
      .click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/notes')
    })
  })

  it('does not leave the page on save with no input', () => {
    cy.get('button')
      .contains('save')
      .click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/add')
    })
  })

  it('saves an entered note and displays it', () => {
    cy.get('textarea').type('This is a test note.')
    cy.get('button')
      .contains('save')
      .click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/notes')
    })
    cy.get('[class^="NotesList"]')
      .contains('This is a test note.')
      .should('exist')
  })
})
