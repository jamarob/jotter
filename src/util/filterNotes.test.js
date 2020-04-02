import filterNotes from './filterNotes'

describe('filterNotes', () => {
  const TEST_NOTES = [
    { text: 'Note1' },
    { text: 'Note2' },
    { text: 'Note3' },
    { text: 'Note4' },
    { text: 'Note5' },
    { text: 'Something different' },
    { text: 'And another one' },
  ]

  it('returns all notes when no search string is given', () => {
    expect(filterNotes(TEST_NOTES, '')).toMatchObject(TEST_NOTES)
  })

  it('returns notes matching the search', () => {
    const WITH_NOTE_IN_TEXT = [
      { text: 'Note1' },
      { text: 'Note2' },
      { text: 'Note3' },
      { text: 'Note4' },
      { text: 'Note5' },
    ]
    expect(filterNotes(TEST_NOTES, "'Note")).toMatchObject(WITH_NOTE_IN_TEXT)
  })
})
