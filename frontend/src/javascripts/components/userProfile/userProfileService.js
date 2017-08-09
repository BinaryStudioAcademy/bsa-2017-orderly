export let userProfileService = {
    fetchUser(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({name: 'Ivan'});
            }, 2000);
        });
    }
};