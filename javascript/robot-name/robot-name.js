//global container for already used names
var usedNames = [];

//robot constructor for new name
function Robot(){
  this.name = Robot.prototype.createName();
}

Robot.prototype.createName = function() {
  var robot = '';

  var numbers = ['1','2','3','4','5','6','7','8','9','0'];
  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var unique = false;

  while(unique === false) {
    for (var i = 0; i < 2; i++) {
      robot += letters[Math.floor(Math.random() * letters.length)];
    }

    for (var i = 0; i < 3; i++) {
      robot += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if(usedNames.indexOf(robot) === -1){
      usedNames.push(robot);
    return robot;

    }
  }
};

// Robot.prototype.reset = function() {
//   var newRobot = Robot();
//   return newRobot.name;
// };

module.exports = Robot;

