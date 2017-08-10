function callAddUserApi(credentials) {
    console.log('CALL ADD USER API');
    console.log(credentials);
    const url = 'http://localhost:3000/user/signup';
    return fetch(url, {method: 'POST'})
        .then((response) => response.json().then((json) => ({json, response})));
    //     .then(
    //         (response) => ({response}),
    //         (error) => ({error: error.message})
    //     );
}

export const fetchSignUp = (credentials) => callAddUserApi(credentials);