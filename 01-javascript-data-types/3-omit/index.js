/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  Object.keys(obj).map(key => {
    for (let i = 0; i < fields.length; i++) {
      if (fields[i] === key)
        delete obj[key];
    }
  });

  return obj;
};
