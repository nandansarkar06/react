import React, { useState, useMemo } from 'react'



function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [count2, setCountTwo] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleIncrementTwo = () => {
        setCountTwo(count2 + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++
        return count % 2 === 0;
    }, [count])

    return (
        <div>
            <button onClick={handleIncrement}>Increment One {count}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={handleIncrementTwo}>Increment Two {count2}</button>
        </div>
    )
}

export default UseMemoExample
