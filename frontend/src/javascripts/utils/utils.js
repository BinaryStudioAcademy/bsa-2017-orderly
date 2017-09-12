import Moment from 'moment';

const formatDateFromNow = (timestamp) => {
    const momentDate = Moment(timestamp);
    const NOW = Moment();

    if (momentDate.isSame(NOW, 'day')) {
        return momentDate.fromNow();
    } else if (momentDate.isSame(NOW, 'week')) {
        return momentDate.format('dddd at h:mm A');
    } else if (momentDate.isSame(NOW, 'month')) {
        return momentDate.format('MMMM D at h:mm A');
    } else {
        return momentDate.format('MMMM D YYYY at h:mm A');
    }
}

export {
    formatDateFromNow
};