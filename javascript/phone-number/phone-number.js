function PhoneNumber(num){
  this.num = num;
}

PhoneNumber.prototype.number = function() {
  //replaces any non digit
  var cleanNum = this.num.replace(/\D+/g, '');

  while (cleanNum.length > 10){
    //if first character is greater than 10, slice off
    if (cleanNum.charAt(0) === "1" && cleanNum.length > 10){
      return cleanNum.slice(1);
    } else {
      return '0000000000';
    }
  }
  return cleanNum;
};


module.exports = PhoneNumber;
