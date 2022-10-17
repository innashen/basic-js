const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let AllCat = 0;
  for( let cat of matrix){
    if(Array.isArray(cat)){AllCat = AllCat + countCats(cat);}
    if(cat === '^^'){AllCat++;}
  }
  return AllCat;
}

module.exports = {
  countCats
};
