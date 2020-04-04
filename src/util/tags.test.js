import { splitAtTag, getTagsFromText, getTagsFromNotes } from './tags'

describe('splitAtTag', () => {
  const TEXT =
    "#Think! Let your #heart take you to wherever you want to be. Let's make some #happy little clouds in our world."

  it('returns an array of text chunks and tags', () => {
    expect(splitAtTag(TEXT)).toEqual([
      '',
      '#Think',
      '! Let your ',
      '#heart',
      " take you to wherever you want to be. Let's make some ",
      '#happy',
      ' little clouds in our world.',
    ])
  })
})

describe('getTagsFromText', () => {
  const TEXT_WITH_TAGS =
    "#Think! Let your #heart take you to wherever you want to be. Let's make some #happy little clouds in our world."
  const TEXT_WITHOUT_TAGS =
    "Think! Let your heart take you to wherever you want to be. Let's make some happy little clouds in our world."

  it('returns all the tags in a text', () => {
    expect(getTagsFromText(TEXT_WITH_TAGS)).toEqual([
      '#Think',
      '#heart',
      '#happy',
    ])
  })

  it('returns an empty array when there are no tags in a text', () => {
    expect(getTagsFromText(TEXT_WITHOUT_TAGS)).toEqual([])
  })
})

describe('getTagsFromNotes', () => {
  const NOTES = [
    {
      text:
        "A fan #brush can be your best #friend. Now, we're going to fluff this cloud. Now we can begin working on lots of #happy little things.",
    },
    {
      text:
        "Let's have a #happy little tree in here. Let's give him a friend too. Everybody needs a #friend.",
    },
    {
      text:
        'No #worries. No cares. Just float and wait for the wind to blow you around. Everybody needs a #friend. Let that #brush dance around there and play.',
    },
  ]

  it('returns a sorted list of uniques tags', () => {
    expect(getTagsFromNotes(NOTES)).toEqual([
      '#brush',
      '#friend',
      '#happy',
      '#worries',
    ])
  })
})
