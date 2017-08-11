export let contextMenuService = {
  fetchBase(baseId){
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'My New Base' });
      }, 2000);
    });

    return promise;
  }
};