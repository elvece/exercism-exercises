function PhoneNumber(num){
  this.num = num;
}

PhoneNumber.prototype.number = function() {
  //replaces any non digit
  var cleanNum = this.num.replace(/\D+/g, '');
  //if first character is 1, slice off
    if (cleanNum.length > 10){
      return cleanNum.slice(1);
    } else {
      return cleanNum;
    }
};



// if (phone.charAt(3) === "-" && phone.charAt(7) === "-" && phone.length === 12) {

module.exports = PhoneNumber;
