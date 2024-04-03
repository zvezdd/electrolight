import React, { useState } from 'react'
import { useToggle } from '../hooks/useToggle'

export default function Media() {

    const [isVisible, toggle] = useToggle();

  return (
    <div>
        {isVisible && ( <h1>hidden text</h1> )}
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
    </div>
  )
}
