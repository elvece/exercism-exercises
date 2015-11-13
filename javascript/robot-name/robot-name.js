function Robot(){
  this.name;
  this.usedNames = [];

  var num = Math.floor(Math.random() * 100);
  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var robotLetters = [];
  var singleLetters = letters.forEach(, function(){
    console.log(letter[num]);
    return robotLetters.push.letter[num];
  });
  console.log(robotLetters);
  name = robotLetters[1] + robotLetters[2] + num + num + num;
  console.log(this.name);
  return this.name;
}

Robot();
console.log('done')
module.exports = Robot;
