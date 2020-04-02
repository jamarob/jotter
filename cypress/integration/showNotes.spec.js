import { putNotes, saveNotesToLocal } from '../../src/util/services'

const notes = [
  {
    id: '5e7e01d3d6bb9e58415f425d',
    text:
      "A fan #brush can be your best #friend. Now, we're going to fluff this cloud. Now we can begin working on lots of #happy little things.",
    created: '2020-03-26T18:20:08.144Z',
    edited: '2020-03-26T18:20:08.144Z',
  },
  {
    id: '5e7e01d3d6bb9e58415f425e',
    text: 'We can fix #anything.',
    created: '2020-03-26T18:20:02.130Z',
    edited: '2020-03-26T18:20:02.130Z',
  },
  {
    id: '5e7e01d3d6bb9e58415f425f',
    text:
      'This painting comes right out of your #heart. You can create the world you want to see and be a part of. You have that power.',
    created: '2020-03-26T18:19:56.057Z',
    edited: '2020-03-26T18:19:56.057Z',
  },
]

describe('Show notes', () => {
  it('shows no notes when storage is empty', () => {
    putNotes([]).catch(() => null)

    cy.visit('/')
    cy.contains('No notes found...').should('exist')
  })

  it('shows all the notes in storage', () => {
    putNotes(notes).catch(() => saveNotesToLocal(notes))

    cy.visit('/')
    cy.contains('No notes found...').should('not.exist')
    cy.get(`[class^="NotesList"] :nth-child(${3})`).should('exist')
  })
})
