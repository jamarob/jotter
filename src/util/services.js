import axios from 'axios'

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

const SEARCH_TERM_KEY = 'SEARCH_TERM'

export function loadSearchTerm() {
  return localStorage.getItem(SEARCH_TERM_KEY) || ''
}

export function saveSearchTerm(searchTerm) {
  localStorage.setItem(SEARCH_TERM_KEY, searchTerm)
}

const NOTES_KEY = 'NOTES'

export function loadNotesFromLocal() {
  return JSON.parse(localStorage.getItem(NOTES_KEY)) || []
}

export function saveNotesToLocal(notes) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
}

const NEEDS_SYNC_KEY = 'NEEDS_SYNC'

export function needsSync() {
  return JSON.parse(localStorage.getItem(NEEDS_SYNC_KEY)) || false
}

export function setNeedsSync(bool) {
  localStorage.setItem(NEEDS_SYNC_KEY, JSON.stringify(bool))
}

export function sync() {
  return new Promise((resolve, reject) => {
    if (needsSync()) {
      const notes = loadNotesFromLocal()
      putNotes(notes)
        .then(() => {
          setNeedsSync(false)
          resolve()
        })
        .catch(() => resolve())
    } else {
      resolve()
    }
  })
}
