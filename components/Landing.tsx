'use client'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import LoginBtn from './LoginBtn';

export default function Landing() {

    let clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    return (
        <GoogleOAuthProvider clientId={clientId ? clientId : ''} >
            <LoginBtn />
        </GoogleOAuthProvider>
    )
}
