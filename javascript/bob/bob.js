
var Bob = function() {};

Bob.prototype.hey = function(input) {
  //if includes CAPS response is Whoa chill out
  //if includes ? at end, whatever
  //if nothing, fine by that way
  //else whatever
  input = input.trim();
//input === input.toUpperCase() && input != input.toLowerCase()

  if ((/(^.*[A-Z]{2,}.*$)/).test(input)) {
    return 'Whoa, chill out!';
  }
  elseif(()){
    //starts at end and sees if last character is question mark
    //input.splice(-1) == '?'

  }
  //if not blank
//loop input if input.charAt(i) == ' '

  else {
    //silent
    return 'Fine be that way.';
  }

};

module.exports = Bob;
