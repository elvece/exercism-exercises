//global container for already used names
var usedNames = [];

function Robot(){
  this.name = '';

  var numbers = ['1','2','3','4','5','6','7','8','9','0'];
  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  while(usedNames.indexOf(this.name) === -1) {
    for (var i = 0; i < 2; i++) {
      this.name += letters[Math.floor(Math.random() * letters.length)];
    }

    for (var i = 0; i < 3; i++) {
      this.name += numbers[Math.floor(Math.random() * numbers.length)];
    }
      usedNames.push(this.name);
  }
    return this.name;
}

Robot.prototype.reset = function() {
  this.name = '';
};

module.exports = Robot;
