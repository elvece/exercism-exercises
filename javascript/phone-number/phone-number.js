function PhoneNumber(num){
  this.num = num;
}

//REFACTOR!!!
PhoneNumber.prototype.number = function() {
  //replaces any non digit
  var cleanNum = this.num.replace(/\D+/g, '');

  if (cleanNum.length <= 9){
    return '0000000000';
  }

  while (cleanNum.length > 10){
    //if first character is greater than 10, slice off
    if (cleanNum.charAt(0) === "1"){
      return cleanNum.slice(1);
    } else {
      return '0000000000';
    }
  }
  return cleanNum;
};

PhoneNumber.prototype.areaCode = function() {
  var cleanNum = this.num.replace(/\D+/g, '');
  if (cleanNum.length === 10){
    return cleanNum.slice(0, 3);
  }
};

PhoneNumber.prototype.toString = function() {
  var cleanNum = this.num.replace(/\D+/g, '');
  if (cleanNum.length === 10){
    var areaCode = cleanNum.slice(0, 3);
    var rest = cleanNum.slice(3)
    return '(' +areaCode+ ') ' +rest+ '';
  }
};

module.exports = PhoneNumber;
