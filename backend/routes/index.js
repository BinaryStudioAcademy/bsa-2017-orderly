module.exports = router => {

	router.get('/', (req, res) => {
		res.send('REST API orderly v1.0')
	});

	// router.use('/user', require('./user'));

	router.use('/tables', require('./table'));
};
