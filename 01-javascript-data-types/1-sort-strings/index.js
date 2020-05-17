/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  arr.sort((second, first) => second.localeCompare(first));
  arr.sort((second, first) => {
    if (second[0] === second[0].toUpperCase()) {
      return (second[0].toLowerCase() === first[0]) ? -1 : 1;
    }
  });

  if (param === 'desc') {
    arr.reverse();
  }

  return arr;
}

