// 1 = wink
// 10 = double blink
// 100 = close your eyes
// 1000 = jump
// 10000 = Reverse the order of the operations in the secret handshake.


function SecretHandshake(handshake){
  var allCommands = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse'];
  if (typeof handshake !== 'number'){
    throw 'Handshake must be a number';
  }
  this.commands = function(){
    return this.calculateHandshake(handshake);
  };
  this.calculateHandshake = function(handshake){
    var finalHandshake = [];
    for (var i = 0; i < allCommands.length; i++) {
      var findCommand = (handshake & Math.pow(2,i));
      if (findCommand)
        if(allCommands[i] === 'reverse'){
          finalHandshake.reverse();
        } else {
          finalHandshake.push(allCommands[i]);
        }
    }
    return finalHandshake;
  };
}


module.exports = SecretHandshake;
