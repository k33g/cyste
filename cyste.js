window.cyste = {
  items: Object.entries(localStorage),
  getItem: (key) => localStorage.getItem(key),
  setItem: (key, value) => localStorage.setItem(key, value)
}