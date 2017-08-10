export let userProfileService = {
    fetchUser(userId){
        return Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ name: 'Ivan' });
            }, 2000);
        });
    }
};