export const getApiUrl = (path) => `http://localhost:3000/${path}`;


/*
Ejemplo de uso
Crear un service dentro de la carpeta services y llamarlo de la siguiente manera


import { getApiUrl } from './ConfigApi';

export class LoginService {
	loginUser(userName, password) {
		return fetch(getApiUrl('api/v1/pibe/auth/login'), {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				password: password,
				username: userName,
			}),
		});
	}
}


*/