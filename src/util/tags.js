const TAG_REG_EXP = /(@\w+)/

export function splitAtTag(text) {
  return text.split(TAG_REG_EXP)
}

export function getTagsFromText(text) {
  return splitAtTag(text).filter((_, index) => index % 2 !== 0)
}

export function getTagsFromNotes(notes) {
  return [
    ...new Set(
      notes.reduce((tags, note) => [...tags, ...getTagsFromText(note.text)], [])
    ),
  ]
}
