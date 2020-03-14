import Fuse from 'fuse.js'

const FUSE_OPTIONS = {
  useExtendedSearch: true,
  threshold: 0.5,
  location: 0,
  distance: 1000,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: ['text'],
}

export default function filterNotes(notes, search) {
  if (search === '') {
    return notes
  } else {
    const fuse = new Fuse(notes, FUSE_OPTIONS)
    return fuse.search(search)
  }
}
