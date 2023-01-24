const sumAll = function(num1, num2) {

    let sum = num1 + num2;
    let subNum = 0;
    
    if (num1 < 0 || num2 < 0) return "ERROR"; //no negative numbers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR" //no non-number entries

    if (num1 > num2) { // ex. 3, 2
        let temp = num2;// temp is 2
        num2 = num1;//num2 is now 3
        num1 = temp; //num1 is now 2
        
    }

    subNum = num2; //should be the bigger num no matter what

    for (let i=0; i<num2; i++)
        if (num1 != (subNum-1)) {
            subNum -= 1;
            sum += subNum;
        }

        return sum;
};

console.log(sumAll(4, 1));


// Do not edit below this line
module.exports = sumAll;
