function formatTime(mseconds) {
    const seconds = Math.floor(mseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);
    return {
        years,
        days,
        hours,
        minutes,
        seconds
    }
}

module.exports = {
    formatTime
};