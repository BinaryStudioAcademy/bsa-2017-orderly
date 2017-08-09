export let userProfileService = {
	fetchUser(userId){
		let promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name: 'Ivan' });
			}, 2000);
		});

		return promise;
	}
};