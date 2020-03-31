import React from 'react'
import styled from 'styled-components/macro'
import { FaLightbulb } from 'react-icons/fa'

export default function Tip(props) {
  return (
    <StyledTip className={props.className}>
      <Lightbulb className="icon" />
      <p className="text">{props.children}</p>
    </StyledTip>
  )
}

const StyledTip = styled.div`
  display: flex;
  align-items: center;

  .text {
    font-family: Handlee;
    text-transform: uppercase;
    word-wrap: break-word;
    color: var(--neutral-5);
  }

  .icon {
    font-size: var(--size-5);
    margin-right: var(--size-3);
    color: var(--neutral-3);
  }
`

const Lightbulb = styled(FaLightbulb)``
