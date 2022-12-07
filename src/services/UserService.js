import {getApiUrl} from "../utilities/ConfigApi.js";

export class UserService {

    getUserInfo(id){
        return fetch(getApiUrl(`users/${id}`),{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
    }

    updateVerbsUser(info){
        return fetch(getApiUrl(`users/verb`),{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(info),
        })
    }

}