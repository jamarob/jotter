import React from 'react'

export default function({ created, text }) {
  return (
    <section>
      {created}
      <br />
      {text}
    </section>
  )
}
