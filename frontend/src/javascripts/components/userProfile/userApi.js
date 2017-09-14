import axios from 'axios';
import {userProfileService} from './userProfileService';

const fetchUser = (userId) => userProfileService.fetchUser();

const getCurrentUser = () =>
    axios.get('/api/user/me')
        .then((response) => response.data)
        .catch((error) => error.data);

const updateUserById = (_id, updateData) =>
    axios.put('/api/user/' + _id, updateData)
        .then((response) => response.data)
        .catch((error) => error.data);

const uploadAvatar = (data) =>
    axios.post('/files/', data)
        .then((response) => response.data)
        .catch((error) => error.data);

const getAvatar = (path) =>
    axios.get('/api/files/' + path)
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    fetchUser,
    getCurrentUser,
    updateUserById,
    uploadAvatar,
    getAvatar
};