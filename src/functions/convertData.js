/**
 * Function that transform date string from "yyyy-mm-dd" to "dd MMM yyyy"
 *
 * @param {string} date - Date string formatted as ("YYYY-MM-DD") eg. 2018-03-20
 * @return {string} Reformatted date string as ("dd MMM yyyy ") eg. 20 Mar 2018
 */
export default function convertDate(date) {
    return new Date(date).toLocaleDateString("en-gb", {
        year: "numeric",
        day: "numeric",
        month: "short",
    });
}
