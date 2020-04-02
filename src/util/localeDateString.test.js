import localeDateString from './localeDateString'

describe('localeDateString', () => {
  it('converts a date in ISO format to DD.MM.YYYY', () => {
    const isoDateString = '2020-03-09T21:05:23.667581Z'

    expect(localeDateString(isoDateString, 'de-DE')).toBe('9.3.2020')
  })
})
