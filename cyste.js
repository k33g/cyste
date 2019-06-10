/**
  @license MIT
  Copyright (c) 2019 Philippe Charrière
  Twitter: @k33g_org
  GitLab: @k33g
  GitHub: @k33g
*/

window.cyste = {
  items: Object.entries(localStorage),
  getItem: (key) => localStorage.getItem(key),
  setItem: (key, value) => localStorage.setItem(key, value)
}