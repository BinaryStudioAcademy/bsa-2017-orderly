import axios from 'axios';
import {userProfileService} from './userProfileService';

const fetchUser = (userId) => userProfileService.fetchUser();

const getCurrentUser = () =>
    axios.get('/api/user/me')
        .then((response) => response.data)
        .catch((error) => error.data);

debugger
const updateUserById = (_id, updateData) =>
    axios.put('/api/user/' + _id, JSON.parse(JSON.stringify(updateData)))
        .then((response) => response.data)
        .catch(R.tap(console.error));

export {
    fetchUser,
    getCurrentUser,
    updateUserById
};