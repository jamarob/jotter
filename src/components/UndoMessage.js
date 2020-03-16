import PropTypes from 'prop-types'
import React from 'react'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import useUndoMessage from '../hooks/useUndoMessage'

UndoMessage.propTypes = {
  text: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
}

export default function UndoMessage({ text, onUndo, onDismiss }) {
  const { remaining, show, ref, handleUndo, handleDismiss } = useUndoMessage({
    start: 5,
    onUndo,
    onDismiss,
  })

  return (
    <StyledUndoMessage show={show} ref={ref}>
      {text} <button onClick={handleUndo}>UNDO</button>
      <CountDown>({remaining})</CountDown>
      <Dismiss onClick={handleDismiss} />
    </StyledUndoMessage>
  )
}

const StyledUndoMessage = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 8px;
  background: #333;
  color: whitesmoke;
  width: 100%;
  top: 48px;
  left: ${props => (props.show ? 0 : '-105%')};
  //box-shadow: 2px 2px 2px 2px lightgray;
  transition: 0.3s left ease-in-out;

  button {
    font-size: 16px;
    background: none;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    border-radius: 4px;
    padding: 2px;
    margin-left: 16px;
    margin-right: auto;
    cursor: pointer;
  }
`

const Dismiss = styled(MdClose)`
  font-size: 24px;
  cursor: pointer;
`
const CountDown = styled.div`
  margin-right: 8px;
`
