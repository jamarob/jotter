import React from 'react'
import Header from '../components/Header'
import NotesList from '../components/NotesList'
import styled from 'styled-components/macro'
import Search from '../components/Search'

export default function BrowseNotes({ notes, onTagClick }) {
  return (
    <>
      <Header title="Browse Notes" />
      <Main>
        <NotesList notes={notes} onTagClick={onTagClick} />
      </Main>
    </>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`
