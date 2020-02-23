const getNavigatorLanguage = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0]
  } else {
    return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en'
  }
}

export default function toLocalDateString(dateString, enableTime = false) {
  const date = new Date(dateString)
  let options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  if (enableTime) {
    options = {
      ...options,
      hour: '2-digit',
      minute: '2-digit'
    }
  }
  return date.toLocaleDateString(getNavigatorLanguage(), options)
}
