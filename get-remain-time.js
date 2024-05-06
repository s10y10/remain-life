const { formatTime } = require('./format-time')

function getRemainTime(endDate) {
    const today = new Date();
    const endDateObj = new Date(endDate);
    const mseconds = endDateObj.getTime() - today.getTime();
    return formatTime(mseconds)
}

module.exports = {
    getRemainTime
}
