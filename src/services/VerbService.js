import {getApiUrl} from "../utilities/ConfigApi.js";

export class VerbService {

    getAllVerbs(){
        return fetch(getApiUrl('verbs'),{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
    }

}