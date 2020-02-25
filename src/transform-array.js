module.exports = function transform(arr) {
    if (arr.length === 0) return [];
    if (!Array.isArray(arr)) throw new Error();
    
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--double-next') {
            
            if(i + 1 < arr.length) {
                newArr.push(arr[i + 1]);  
            }
            
        } else if (arr[i] == '--double-prev') {

            if (i - 1 >= 0) {
                newArr.push(arr[i - 1]);
            }
            
        } else if (arr[i] == '--discard-next') {
            i++;
            
        } else if (arr[i] == '--discard-prev') {
            newArr.pop()
            
        } else {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
};

