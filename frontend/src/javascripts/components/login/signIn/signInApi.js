import R from 'ramda';
import fetch from 'isomorphic-fetch';
const url = 'http://localhost:2020/auth/login';

const login = (user) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then((responce) => responce.json())
        .catch(R.tap(console.error));

export {
    login
};