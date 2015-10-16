function isLeapYear(year){

  //if year is divisible by 100, do nothing, false
  //elseif the year is also divisible by 400, then true
  if (year % 100 === 0 && year % 400 === 0)
    return true;

  if (year % 100 === 0){
    return false;
  }

  //if the year is divisible by 4, the result will not produce a fraction
  if (year % 4 === 0){
    return true;
  } else
  return false;
}

module.exports = isLeapYear;
