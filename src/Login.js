import React, { useState } from 'react'

export default function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState(null)

    const handleSubmit = event => {
        event.preventDefault()

        const userData = {
            username,
            password
        }

        setUserData(userData)
        setUsername('')
        setPassword('')
    }

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <form
                onSubmit={handleSubmit}
                style= {{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}>
                <input
                    onChange={ event => setUsername(event.target.value) }
                    type='text'
                    placeholder='username'
                    value={username}
                />
                <input 
                    onChange={ event => setPassword(event.target.value) }
                    type='password'
                    placeholder='password'
                    value={password}
                />
                <button type='submit'>Login</button>
            </form>

            {userData ? JSON.stringify(userData) : null}
        </div>
    )
}