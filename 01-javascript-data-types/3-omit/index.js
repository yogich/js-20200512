/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {

  let keys = Object.keys(obj);
  let object = {};

  keys.map((item, index, arr) => {
    if (arr[index] !== fields[index]) {
      object[item] = item;
    }
  });

  return object;
};
