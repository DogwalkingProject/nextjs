import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'

export default function LoginBtn() {
  
    const login = useGoogleLogin({
        onSuccess: codeResponse => {
            console.log(codeResponse); 
            // SEND CODE TO BACKEND TO VERIFY EMAIL 

        },
        flow: 'auth-code'
    })
    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    )
}
