export const GET_USER_NAME_REQUESTED = 'GET_USER_NAME_REQUESTED';
export const GET_USER_NAME_SUCCEEDED = 'GET_USER_NAME_SUCCEEDED';
export const CHANGE_USER_NAME_COLOR = 'CHANGE_USER_NAME_COLOR';
export const GET_CURRENT_USER_REQUESTED = 'GET_CURRENT_USER_REQUESTED';
export const GET_CURRENT_USER_SUCCEEDED = 'GET_CURRENT_USER_SUCCEEDED';

export function changeUserNameColor(data){
    return {
        type: CHANGE_USER_NAME_COLOR,
        color: data.color
    };
}

export function getUserName(data) {
    return {
        type: GET_USER_NAME_REQUESTED,
        userId: data.userId
    };
}

export function getCurrentUser() {
    return {
        type: GET_CURRENT_USER_REQUESTED
    };
}

// export function getUserName(){
// 	return (dispatch) => {
// 		dispatch({
// 			type: GET_USER_NAME_REQUESTED,
// 	        userId: data.userId
// 		});
// 	}
// }