const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
if(date instanceof Date){
    const month = date.getMonth();
    if(month === null || month === undefined) { return 'Invalid date!'}
    else if(month === 1 || month === 0 || month === 11){ return 'winter';}
    else if(3 <= month && month <= 5){ return 'spring';}
    else if(6 <= month && month <= 8){ return 'summer';}
    else if(9 <= month && month <= 11) { return 'autumn';}
  }
}

module.exports = {
  getSeason
};
