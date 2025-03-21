let date1Parts: string[] = []
let yearOne = 0
let monthOne = 0
let dayOne = 0
let date2Parts: string[] = []
let yearTwo = 0
let monthTwo = 0
let dayTwo = 0
let totalDaysOne = 0
let totalDaysTwo = 0
let totalDays = 0
// return Math.abs(totalDaysTwo - totalDaysOne)
function daysBetweenDates (date1Str: string, date2Str: string) {
    // 解析第一个日期
    date1Parts = date1Str.split("-")
    yearOne = parseInt(date1Parts[0])
    // 月份转为 0-11
    monthOne = parseInt(date1Parts[1]) - 1
    dayOne = parseInt(date1Parts[2])
    // 解析第二个日期
    date2Parts = date2Str.split("-")
    yearTwo = parseInt(date2Parts[0])
    monthTwo = parseInt(date2Parts[1]) - 1
    dayTwo = parseInt(date2Parts[2])
    // 计算总天数差
    totalDaysOne = getTotalDays(yearOne, monthOne, dayOne)
    totalDaysTwo = getTotalDays(yearTwo, monthTwo, dayTwo)
    // basic.showNumber(totalDaysOne)
    return totalDaysTwo - totalDaysOne
}
function getTotalDays (year: number, month: number, day: number) {
    totalDays = 0
    for (let y = 0; y <= year - 1; y++) {
        totalDays += isLeapYear(y) ? 366 : 365
    }
    // 累加当前年份的月份天数（0 到 month-1）
    for (let m = 0; m <= month - 1; m++) {
        totalDays += getDaysInMonth(year, m)
    }
    // 累加当前月份的天数（日期从1开始，需减1）
    totalDays += day - 1
    return totalDays
}
function getDaysInMonth (year: number, month: number) {
    // 二月
    if (month == 1) {
        return isLeapYear(year) ? 29 : 28
    }
    // 4、6、9、11月
    if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30
    }
    // 其他月份
    return 31
}
function isLeapYear (year: number) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
}
// basic.showNumber(daysBetweenDates("2025-3-6", "2025-3-6"))
basic.forever(function () {
    basic.showNumber(daysBetweenDates("1971-1-3", "1970-1-5"))
})
