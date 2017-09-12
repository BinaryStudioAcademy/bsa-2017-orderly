import axios from 'axios';
const url = '/api';
import R from 'ramda';

export const updateView = (action) => {
    return axios.put(url + '/view/form/' + action.viewId + '/fields', action)
        .then((response) => response)
        .catch(R.tap(console.error));
};
