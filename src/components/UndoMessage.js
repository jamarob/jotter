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
  padding: var(--size-1) calc(var(--size-5) + var(--size-1));
  background: var(--neutral-1);
  color: var(--neutral-9);
  width: 100%;
  top: var(--size-7);
  left: ${props => (props.show ? 0 : '-105%')};
  transition: 0.3s left ease-in-out;
  font-size: var(--size-4);
  button {
    font-size: var(--size-4);
    background: none;
    color: var(--primary-5);
    border: 1px solid var(--primary-5);
    border-radius: 4px;
    padding: 2px;
    margin-left: var(--size-4);
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
