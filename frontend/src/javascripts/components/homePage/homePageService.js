const setName = (activeModal) => {
	switch (activeModal) {
		case 'settings': return 'Team settings'
		case 'rename': return 'Rename team'
		case 'delete': return 'Delete team'
	}
}

export {
	setName
}