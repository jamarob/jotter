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
  ].sort(compareTags)
}

function compareTags(tag1, tag2) {
  const a = tag1.toLowerCase()
  const b = tag2.toLowerCase()
  if (a < b) {
    return -1
  }
  if (b < a) {
    return 1
  }
  return 0
}
