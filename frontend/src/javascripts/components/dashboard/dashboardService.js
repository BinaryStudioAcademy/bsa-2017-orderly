const setName = (activeModal) => {
    switch (activeModal) {
        case 'rename':
            return 'Rename table';
        case 'edit description':
            return 'Edit description';
        case 'duplicate':
            return 'Duplicate table';
        case 'delete':
            return 'Delete table';
    }
};

export {
    setName
}