const DATE_TIME_OPTIONS = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
}

// passing undefined as the locale picks the default locale
export default function localeDateString(time, locale) {
  return new Date(time).toLocaleString(locale, DATE_TIME_OPTIONS)
}
