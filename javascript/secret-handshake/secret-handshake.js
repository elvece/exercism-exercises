// 1 = wink
// 10 = double blink
// 100 = close your eyes
// 1000 = jump
// 10000 = Reverse the order of the operations in the secret handshake.

function toBinary(num){
  return (num >>> 0).toString(2);
}

function SecretHandshake(number){
 this.number = number;
}

SecretHandshake.prototype.commands = function() {
  var command = [];
  toBinary(this.number);
  console.log(this.number);
  if (this.number === 1){
    command.push('wink');
  }
  return command;
};

module.exports = SecretHandshake;
