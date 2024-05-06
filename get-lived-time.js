const { formatTime } = require('./format-time')

function getLivedTime(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const mseconds = today.getTime() - birthDateObj.getTime();
    return formatTime(mseconds);
}

module.exports = { getLivedTime }