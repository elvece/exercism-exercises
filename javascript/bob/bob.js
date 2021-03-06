
var Bob = function() {};

Bob.prototype.hey = function(input) {

  //checks if input is all uppercase letters or
  if (input === input.toUpperCase() && input != input.toLowerCase()) {
    return 'Whoa, chill out!';
  }

  //starts at last character of input and sees if it is a question mark
  if (input.slice(input.length - 1) === '?'){
    return 'Sure.';
  }

  //trimming blank space to see if no input (blank/just spaces)
  //could also loop input if input.charAt(i) == ' '
  if (input.trim() === ''){
    return 'Fine. Be that way!';
  }

  //all other cases return whatever
  else {
    return 'Whatever.';
  }

};

module.exports = Bob;
