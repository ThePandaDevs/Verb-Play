import {getApiUrl} from "../utilities/ConfigApi.js";

export class LoginService {

    loginUser(user){
        return fetch(getApiUrl(`users/login`),{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    }

    registerUser(user){
        return fetch(getApiUrl('users'),{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    }

}