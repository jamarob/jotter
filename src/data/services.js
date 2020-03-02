import Notes from './notes.json'

export function getNotes() {
  const sortedNotes = [...Notes]
  sortedNotes.sort((a, b) => b.created - a.created)
  return sortedNotes
}
