/**
 * Converts number into currency format for pound sterling
 *
 * @param {number} value - Currency value as a number eg. 1800.9
 * @return {string} - Pound stering currency format eg. £ 1,800.9
 */
const convertCurrency = (value) => {
    if (isNaN(value)) {
        value = 0;
    }

    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
    });

    return currencyFormatter.format(value).replace("€", "£ ");
};

export default convertCurrency;
