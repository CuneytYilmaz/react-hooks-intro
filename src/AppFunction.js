import React, { useState } from 'react'

const AppFunction = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={incrementCount}>
                I was clicked {count} times
            </button>
        </div>
    )
}

export default AppFunction