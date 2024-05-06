function getClockTime(birthDate, endDate) {
    const birthDateObj = new Date(birthDate);
    const nowDateObj = new Date();
    const endDateObj = new Date(endDate);

    const livedSec = (nowDateObj.getTime() - birthDateObj.getTime()) / 1000;
    const totalSec = (endDateObj.getTime() - birthDateObj.getTime()) / 1000;
    const livedPer = livedSec / totalSec * 24;

    const clock = Math.floor(livedPer)
    const minutes = Math.floor((livedPer - clock) * 60);

    return {
        clock,
        minutes
    }
}

module.exports = getClockTime;
