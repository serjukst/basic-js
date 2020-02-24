module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnsNumber = Math.pow(2, disksNumber) - 1;
    
    return  {
        turns: turnsNumber,
        seconds: turnsNumber/ (turnsSpeed /3600)
    };
}