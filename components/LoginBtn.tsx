import { apiURL } from '@/libs/config';
import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'

export default function LoginBtn() {

    const login = useGoogleLogin({
        onSuccess: codeResponse => {
            console.log(codeResponse);
            fetch(apiURL + '/auth/google', {
                method: "POST",
                redirect: 'follow',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ code: codeResponse.code })
            }).then(async (r) => {
                interface AuthResp {
                    accessToken: string,
                    accessTokenExpiry: number
                }

                const j: AuthResp = await r.json();

                try {
                    const { accessToken, accessTokenExpiry } = j;
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('accessTokenExpiry', accessTokenExpiry.toString())
                    const emailResp = await fetch(apiURL + '/auth', {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({ token: accessToken })
                    }).then(r => r.json())
                    // set Account Provider Email 
                } catch (e) {
                    // todo HANDLE AUTH ERROR 
                    console.log("Auth Error");
                }

            }).catch(e => {
                console.log(e);
            })
            // SEND CODE TO BACKEND TO VERIFY EMAIL 

        },
        onError: error => {
            console.log(error);
        },
        flow: 'auth-code'
    })
    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    )
}
