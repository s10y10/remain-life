const { isLeapYear } = require('./is-leap-year')

// 获取某年的天数
function getYearDays(year) {
    if (isLeapYear(year)) return 366
    return 365
}

// 今年已经过去的天数
function getYearPassedDays(timestamp) {
    const now = new Date(timestamp || Date.now())
    const year = now.getFullYear()
    const passedSec = now.getTime() - (new Date(year, 0, 1)).getTime()
    return Math.floor(passedSec / (1000 * 60 * 60 * 24))
}

// 今年剩余的天数
function getYearRemainingDays(timestamp) {
    const now = new Date(timestamp || Date.now())
    const yearDays = getYearDays(now.getFullYear())
    const passedDays = getYearPassedDays(now.getTime())
    return yearDays - passedDays
}

module.exports = { getYearDays, getYearPassedDays, getYearRemainingDays }
