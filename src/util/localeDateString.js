const DATE_TIME_OPTIONS = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
}

export default function localeDateString(time, locale = undefined) {
  // passing undefined as the locale picks the default locale
  return new Date(time).toLocaleString(locale, DATE_TIME_OPTIONS)
}
