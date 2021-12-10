import React, { useState, useEffect } from 'react'

function TitleMessage() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click to increae Count</button>
        </div>
    )
}

export default TitleMessage
