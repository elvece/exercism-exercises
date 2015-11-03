function PhoneNumber(num){
  this.num = num;
}

PhoneNumber.prototype.number = function() {
  var newNumber = this.num.replace(/\D+/g, '');
  return newNumber;
};



// if (phone.charAt(3) === "-" && phone.charAt(7) === "-" && phone.length === 12) {

module.exports = PhoneNumber;
