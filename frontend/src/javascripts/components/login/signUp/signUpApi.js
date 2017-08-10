function callAddUserApi(credentials) {
    console.log('CALL ADD USER API');
    console.log(credentials);
    const url = 'http://localhost:2020/api/user';
    const headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    });
    return fetch(url, {method: 'POST', headers: headers, body: JSON.stringify(credentials)})
        .then((response) => {
            console.log(response);
            return response;
        });
    //     .then(
    //         (response) => ({response}),
    //         (error) => ({error: error.message})
    //     );
}

export const fetchSignUp = (credentials) => callAddUserApi(credentials);