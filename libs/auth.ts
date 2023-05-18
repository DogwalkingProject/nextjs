import { apiURL } from "./config";

/*
    @description Check if access token is Expired
*/
export function checkAccessExpiry(): boolean {
    const accessTokenExpiry = localStorage.getItem('accessTokenExpiry');
    try {
        if (!accessTokenExpiry)
            return false;

        const timestamp = parseInt(accessTokenExpiry)
        if (Date.now() >= timestamp) {
            return false;
        }
    } catch {
        return false;
    }
    return true;
}

export function refreshToken() {

    fetch(apiURL + '/auth/refresh', {

    })
}