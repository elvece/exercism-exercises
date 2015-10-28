
var Bob = function() {};

Bob.prototype.hey = function(input) {
  //if includes CAPS response is Whoa chill out
  //if includes ? at end, sure
  //if nothing, fine by that way
  //else whatever

  //if two consecutive uppercase letters exist, yelling
  //not going to work in instances of OK or DMV
  // if ((/(^.*[A-Z]{2,}.*$)/).test(input)) {
  //   return 'Whoa, chill out!';
  // }

  if (input === input.toUpperCase() && input != input.toLowerCase()) {
    return 'Whoa, chill out!';
  }

  //starts at end and sees if last character is question mark
  if (input.slice(-1) === '?'){
    return 'Sure.';
  }
  //if not blank
//loop input if input.charAt(i) == ' '

  if (input.trim() === ''){
    return 'Fine. Be that way!';
  }

  else {
    //silent
    return 'Whatever.';
  }

};

module.exports = Bob;
