module.exports = function countCats(matrix) {
 let count = 0;

    for (let i = 0; i < matrix.length; i++) {
      arr = matrix[i];

      for (let j = 0; j < arr.length; j++) {
        if(arr[j] == "^^") {
          count++;
        }
      }
    }
    return count;
};
