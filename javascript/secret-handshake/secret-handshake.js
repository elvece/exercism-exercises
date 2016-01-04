
function toBinaryHelper(num){
  return (num >>> 0).toString(2);
}

function SecretHandshake(number){
 this.number = number;
}

SecretHandshake.prototype.commands = function() {

};

module.exports = SecretHandshake;
