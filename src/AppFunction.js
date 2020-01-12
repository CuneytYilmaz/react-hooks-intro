import React, { useState, useEffect } from 'react'

const initialLocationState = {
    latitude: null,
    longitude: null,
    speed: null
}

const AppFunction = () => {
    const [count, setCount] = useState(0)
    const [isOn, setIsOn] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: null, y: null})
    const [status, setStatus] = useState(navigator.onLine)
    const [{ latitude, longitude, speed }, setLocation] = useState(initialLocationState)
    let mounted = true

    useEffect(() => {
        document.title = `I was clicked ${count} times`
        window.addEventListener('mousemove', handleMousePosition)
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        navigator.geolocation.getCurrentPosition(handleGeoLocation)
        const watchId = navigator.geolocation.watchPosition(handleGeoLocation)

        return () => {
            window.removeEventListener('mousemove', handleMousePosition) 
            window.addEventListener('online', handleOnline)
            window.addEventListener('offline', handleOffline)
            navigator.geolocation.clearWatch(watchId)
            mounted = false
        }
    },[count])

    const handleGeoLocation = event => {
        if (mounted) {
            setLocation({
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed
            })
        }
    }

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
            <h2>GeoLocation</h2>
            <p>Latitude is {latitude}</p>
            <p>Longitude is {longitude}</p>
            <p>Speed is {speed ? speed : "0"}</p>
        </>
    )
}

export default AppFunction