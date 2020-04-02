const TAG_REG_EXP = /(#\w+)/

export function splitAtTag(text) {
  return text.split(TAG_REG_EXP)
}

const isTag = (_, index) => index % 2 !== 0

export function getTagsFromText(text) {
  return splitAtTag(text).filter(isTag)
}

export function getTagsFromNotes(notes) {
  return [
    ...new Set(
      notes.reduce((tags, note) => [...tags, ...getTagsFromText(note.text)], [])
    ),
  ].sort(compareTags)
}

function compareTags(tag1, tag2) {
  // tags come from a set, so check for equality is not needed
  return tag1.toLowerCase() < tag2.toLowerCase() ? -1 : 1
}
