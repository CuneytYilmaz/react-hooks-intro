import React, { useState, useEffect } from 'react'

const AppFunction = () => {
    const [count, setCount] = useState(0)
    const [isOn, setIsOn] = useState(false)

    useEffect(() => {
        document.title = `I was clicked ${count} times`
    })

    const incrementCount = () => {
        setCount(prevState => prevState + 1)
    }

    const toggleIsOn = () => {
        setIsOn(prevState => !prevState)
    }

    return (
        <>
            <h2>Counter</h2>
            <button onClick={incrementCount}>
                I was clicked {count} times
            </button>
            <h2>Toggle</h2>
            <img
                style={{
                    width: 50,
                    height: 50
                }}
                alt="Flashlight"
                src={
                    isOn ? 'https://icon.now.sh/highlight/fd0'
                         : 'https://icon.now.sh/highlight/aaa'
                }
                onClick={toggleIsOn}
            />
        </>
    )
}

export default AppFunction