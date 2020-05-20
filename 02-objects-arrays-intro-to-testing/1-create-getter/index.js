/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return object => {
    const keys = path.split('.');

    try {
      keys.forEach(key => {
        object = object[key];
      });
    } catch (e) {
      object = undefined;
    }

    return object;
  }
}
