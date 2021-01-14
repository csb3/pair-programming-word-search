const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let array = [];
  for (let i = 0; i < letters[0].length; i++) {
    array.push([letters[0][i]]);
  }
  for (let row = 0; row < letters.length; row++) {
    for (let column = 0; column < letters[row].length; column++) {
      array[column][row] = letters[row][column];
    }
  }
  const verticalJoin = array.map(ls => ls.join(''));
  for (const row of verticalJoin) {
    if (row.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
