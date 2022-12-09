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

    getPercentUser(id){
        return fetch(getApiUrl(`users/verbsPercent/${id}`),{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
    }


    getCountVerbs(id){
        return fetch(getApiUrl(`users/countVerbs/${id}`),{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
    }
}