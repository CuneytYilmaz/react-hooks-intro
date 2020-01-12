import React, { useState, useEffect } from 'react'

const AppFunction = () => {
    const [count, setCount] = useState(0)
    const [isOn, setIsOn] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: null, y: null})
    const [status, setStatus] = useState(navigator.onLine)

    useEffect(() => {
        document.title = `I was clicked ${count} times`
        window.addEventListener('mousemove', handleMousePosition)
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('mousemove', handleMousePosition) 
            window.addEventListener('online', handleOnline)
            window.addEventListener('offline', handleOffline)
        }
    },[count])

    const handleMousePosition = event => {
        setMousePosition({ 
            x: event.pageX,
            y: event.pageY,
        })
    }

    const handleOnline = () => {
        setStatus(true)
    }

    const handleOffline = () => {
        setStatus(false)
    }

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
            <h2>Mouse Position</h2>
            {JSON.stringify(mousePosition, null, 2)}
            <br />
            <h2>Network Status</h2>
            <p>You are {status ? "online" : "offline"}</p>
        </>
    )
}

export default AppFunction