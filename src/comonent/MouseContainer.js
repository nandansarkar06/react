import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Click Toggle</button>
            <h2>{display && <HookMouse />}</h2>
        </div>
    )
}

export default MouseContainer
