const leapYears = function(year) {

    //number needs to be divisible by 4
    //number can also be divisible by 400, but not also 100

    if (year % 4 === 0){
        if (year % 400===0) {
            return true;
        }
        else if (year % 100 === 0 && year % 400 != 0) {
            return false;
        }
        else if (year % 4 === 0 && year % 100 != 0) {
            return true;
        }

        else {
            return false;
        }
        
    }
    else {
        return false;
    }
}

console.log(leapYears(1800));

// Do not edit below this line
module.exports = leapYears;
