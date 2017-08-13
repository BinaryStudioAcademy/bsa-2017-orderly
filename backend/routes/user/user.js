const router = require('express').Router();
const userRepository = require('../../repositories/user/userRepository');

router.get('/me', (request, response) => {
    const user = userRepository.getCurrentUser();
    if (user) {
        return response.status(200).send(user);
    } else {
        return response.status(400).send('Can not get current user.');
    }
});

router.get('/:userId', (request, response) => {
    userRepository.getById(request.params.userId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get user. ${error}`));
});

router.get('/', (request, response) => {
    userRepository.getAll()
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get user list. ${error}`));
});

router.post('/', (request, response) => {
    userRepository.add(request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add user. ${error}`));
});

router.put('/:userId', (request, response) => {
    userRepository.update(request.params.userId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update user. ${error}`));
});

router.delete('/:userId', (request, response) => {
    userRepository.remove(request.params.userId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete user. ${error}`));
});

module.exports = router;