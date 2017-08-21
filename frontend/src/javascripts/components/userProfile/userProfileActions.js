export function getCurrentUser() {
    return {
        type: "GET_CURRENT_USER_REQUESTED"
    };
}

export function changeUserData(_id, data) {
    return {
        type: "CHANGE_USER_PROFILE_DATA",
        updateData: {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            country: data.country,
            city: data.city,
            address: data.address,
            phone: data.phone,
            birthday: data.birthday
        },
        _id
    };
}