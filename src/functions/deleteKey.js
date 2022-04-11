/**
 * Deletes a key from an object. Returns a new object
 *
 * @param {object} obj - Object to remove key from
 * @param {string} key - String of key to remove from object
 * @return {object} - New object with removed key
 */
export default function deleteKey(obj, key) {
    const newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
}
