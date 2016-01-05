
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
