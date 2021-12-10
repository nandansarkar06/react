import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMouseEvent = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMouseEvent)
        return () => {
            window.removeEventListener('mouseover', logMouseEvent)
        }

    }, [])

    return (
        <div>
            <h1>x Display- {x}</h1>
            <h1>y Display - {y}</h1>
        </div>
    )
}

export default HookMouse
