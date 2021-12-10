import React, { useState } from 'react';

function UseStateExample() {
    const [state, setstate] = useState(0)
    return (
        <div>
            <h1>Total count {state}</h1>
            <button onClick={() => setstate(state + 1)}>increase</button>
        </div>
    )
}

export default UseStateExample;
