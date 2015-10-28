//third iteration
function isLeapYear(year){
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

// had: 100, 4, 400
// want: 4, 400, 100

module.exports = isLeapYear;


// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
