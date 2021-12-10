import React, { useContext } from 'react';
import { countContextRoot } from './RootComponent';


function ComponentD() {
    const countContext = useContext(countContextRoot)
    return (
        <div>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
