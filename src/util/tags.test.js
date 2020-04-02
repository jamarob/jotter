import { splitAtTag } from './tags'

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
