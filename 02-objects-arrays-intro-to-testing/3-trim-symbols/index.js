/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let counter = 1;

  if (string && size && size !== 0) {
    let char = string[0];

    for (let i = 1; i <= string.length; i++) {
      counter = (char === string[i]) ? counter + 1 : 1;

      if (counter > size) {
        string = string.slice(0, i) + string.slice(i + 1, string.length);
        i = 0;
        counter = 1;
      }

      char = string[i];
    }
  } else if (size === 0)
    string = "";


  return string;
}
