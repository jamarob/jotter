import axios from 'axios'

const SEARCH_TERM_KEY = 'SEARCH_TERM'

const SERVER_URL = 'http://localhost:8080'

export function putNotes(notes) {
  return axios
    .put(`${SERVER_URL}/notes`, notes)
    .then(promiseStatus200)
    .then(response => response.data)
}

export function getNotes() {
  return axios
    .get(`${SERVER_URL}/notes`)
    .then(promiseStatus200)
    .then(response => response.data)
}

export function postNote(note) {
  return axios
    .post(`${SERVER_URL}/notes`, note)
    .then(promiseStatus200)
    .then(response => response.data)
}

export function deleteNote(id) {
  return axios.delete(`${SERVER_URL}/note/${id}`).then(promiseStatus200)
}

export function putNote(note) {
  return axios
    .put(`${SERVER_URL}/note/${note.id}`, note)
    .then(promiseStatus200)
    .then(response => response.data)
}

function promiseStatus200(response) {
  return new Promise((resolve, reject) => {
    response.status === 200 && resolve(response)
    reject(`Response status: ${response.status}`)
  })
}

export function loadSearchTerm() {
  return localStorage.getItem(SEARCH_TERM_KEY) || ''
}

export function saveSearchTerm(searchTerm) {
  localStorage.setItem(SEARCH_TERM_KEY, searchTerm)
}
