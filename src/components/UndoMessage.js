import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import IconButton from './IconButton'
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
      {text} <UndoButton onClick={handleUndo}>UNDO</UndoButton>
      <CountDown>({remaining})</CountDown>
      <StyledCloseButton title="close" size="5" onClick={handleDismiss} />
    </StyledUndoMessage>
  )
}

const StyledUndoMessage = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  height: var(--size-6);

  position: absolute;
  top: 0;
  left: ${props => (props.show ? 0 : '-105%')};
  transition: 0.3s left ease-in-out;

  padding: var(--size-1) var(--size-5);
  color: var(--neutral-9);
  background: var(--neutral-1);
  font-size: var(--size-4);
  font-family: 'Handlee', cursive;
  text-transform: uppercase;
`
const UndoButton = styled.button`
  font-family: inherit;
  text-decoration: underline;
  color: var(--primary-5);
  background: none;
  border: none;
  padding: 2px;
  margin: 0 auto 0 var(--size-4);
  font-size: var(--size-4);
  cursor: pointer;
`

const StyledCloseButton = styled(IconButton)`
  color: var(--neutral-9);
`
const CountDown = styled.div`
  margin-right: var(--size-2);
`
