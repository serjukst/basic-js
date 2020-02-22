const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE_CONSTANT= 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    let parseNum = parseFloat(sampleActivity);

    if (parseNum > 0 && parseNum < 15 ) {

      return Math.ceil(Math.log(MODERN_ACTIVITY/parseNum)/RATE_CONSTANT);
    
    } else return false;

  } else return false;
};
