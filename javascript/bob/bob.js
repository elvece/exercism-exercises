//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  //if includes CAPS response is Whoa chill out
  //if includes ? at end, whatever
  //if nothing, fine by that way
  //else whatever
  input = input.trim();

  console.log((/^[A-Z]$/).test(input));

  if ((/^[A-Z]$/).test(input)) {
    console.log('hi')
    return 'Whoa, chill out!';
  } else {
    return 'Whatever.';
  }

};

module.exports = Bob;
