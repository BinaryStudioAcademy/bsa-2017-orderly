import { userProfileService } from './userProfileService';

function callApi(userId) {
    console.log('function callApi is called!');
    const url = '';

    // return fetch(url)
    // 	.then(response =>
    // 		response.json().then(json => ({ json, response }))
    // 	).then(({ json, response }) => {
    // 		...
    // 	})
    // 	.then(
    // 		response => ({response}),
    // 		error => ({error: error.message})
    // 	)
    return userProfileService.fetchUser();
}

export const fetchUser = (userId) => callApi(userId);