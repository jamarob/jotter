import axios from 'axios'

const SEARCH_TERM_KEY = 'SEARCH_TERM'

const SERVER_URL = 'http://localhost:8080'

export function getNotes() {
  return axios.get(`${SERVER_URL}/notes`).then(response => response.data)
}

export function postNote(note) {
  return axios.post(`${SERVER_URL}/notes`, note).then(response => response.data)
}

export function deleteNote(id) {
  return axios.delete(`${SERVER_URL}/note/${id}`)
}

export function putNote(note) {
  return axios
    .put(`${SERVER_URL}/note/${note.id}`, note)
    .then(response => response.data)
}

export function loadSearchTerm() {
  return localStorage.getItem(SEARCH_TERM_KEY) ?? ''
}

export function saveSearchTerm(searchTerm) {
  localStorage.setItem(SEARCH_TERM_KEY, searchTerm)
}
