import React from 'react'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const { token } = useParams()
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Reset Password</h1>
            <p>Resetting password for token: {token}</p>
        </div>
    )
}

export default ResetPassword
