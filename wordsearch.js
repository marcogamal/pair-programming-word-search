// const transpose = function(matrix) {
//   let array = [];
//   for (let i = 0; i < matrix[0].length; i++) {
//   array.push([]);
//   }

//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[row].length; col++) {
//         array[col][row] = matrix[row][col];
//     }
//   }
//   return array;
//   };

const transpose = function (matrix) {
  let resultMatrix = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      // check if resultMatrix exists, if not, create it. Otherwise proceed and push the number into it.
      if (!resultMatrix[c]) {
        resultMatrix.push([]);
      }
      resultMatrix[c].push(matrix[r][c]);
    }
  }
  return resultMatrix;
};

// const wordSearch = (letters, word) => {
//   let t = transpose(letters);
//   const horizontalJoin = letters.map((ls) => ls.join(""));
//   const verticalJoin = t.map((ls) => ls.join(""));
//   for (l of horizontalJoin) {
//     if (l.includes(word)) return true;
//   }
//   for (v of verticalJoin) {
//     if (v.includes(word)) return true;
//   }
//   return false;
// };
// refactoring and become:

const wordSearch = (letters, word) => {
  for (i = 1; i <= 2; i++) {
    const horizontalJoin = letters.map(
      (ls) => ls.join("") + ", " + ls.reverse().join("")
    );
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    letters = transpose(letters);
  }
  return false;
};

module.exports = wordSearch;
