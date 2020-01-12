import React, { useState } from 'react'

const initialData = {
    userName: '',
    password: '',
    email: '',
}

export default function Register () {
    const [formData, setFormData] = useState(initialData)
    const [userData, setUserData] = useState(null)

    const onChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        setUserData({
            formData
        })

        setFormData(initialData)
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
                    onChange={onChange}
                    type='text'
                    placeholder='username'
                    value={formData.userName}
                    name='userName'
                />
                <input 
                    onChange={onChange}
                    type='password'
                    placeholder='password'
                    value={formData.password}
                    name='password'
                />
                <input 
                    onChange={onChange}
                    type='email'
                    placeholder='Email Address'
                    value={formData.email}
                    name='email'
                />
                <button type='submit'>Login</button>
            </form>

            {userData ? JSON.stringify(userData) : null}
        </div>
    )
}