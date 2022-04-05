/**
 * Add number of days to a javascript date
 *
 * @param {string} date - Date string eg. 2018-08-18
 * @param {number} days - Number of days to add
 * @return {*}
 */
export default function addDays(date, days) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}
