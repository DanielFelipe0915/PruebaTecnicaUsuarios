/**
 * Replace unicode characters to make the search case-sensitive, lowercase and special characters.
 * @param {String} str
 */
export const replaceUnicodes = (str: string) => {
  return (str + "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

/**
 * Search in a string (string | text) inside another.
 * @param {String} str
 * @param {String} search
 * @returns {Boolean}
 */
export const findInText = (
  str: string,
  search: string
): RegExpMatchArray | null => {
  const regex = new RegExp(
    "(<[^>]*>)|(" +
      replaceUnicodes(search).replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1") +
      ")",
    "ig"
  );
  console.log("str", str);
  console.log(regex, regex);
  return str.match(regex);
};
