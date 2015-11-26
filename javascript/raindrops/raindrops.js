//factor number
//if factor contains 3 = Pling
//if factor contains 5 = Plang
//if factor contains 7 = Plong
//if none, digit as string

//helper function
function getPrimeFactors(num) {
    num = Math.floor(num);
    var root, factors = [], x, sqrt = Math.sqrt, doLoop = 1 < num;
    while( doLoop ){
        root = sqrt(num);
        x = 2;
        if (num % x) {
            x = 3;
            while ((num % x) && ((x += 2) < root));
        }
        x = (x > root) ? num : x;
        factors.push(x);
        doLoop = ( x != num );
        num /= x;
    }
    return factors;
}

// console.log('factors function: '+getPrimeFactors(10));

var Raindrops = function() {};

Raindrops.prototype.convert = function(input) {
  var primes = getPrimeFactors(input);
  // console.log('primes: '+primes)

  var output = "";
  for (var i = 0; i < primes.length; i++) {
    // console.log('primes[i]: '+primes[i])
    if (primes[i] === 3){
      output += 'Pling';
    }
    else if (primes[i] === 5){
      output += 'Plang';
    }
    else if (primes[i] === 7){
      output += 'Plong';
    }
    else {
      console.log('input: '+input)
      output += input.toString();
    }
  }
  console.log('output: '+output)
  return output;
};

//testing
// var drops = new Raindrops();
// console.log(drops.convert(1755));

module.exports = Raindrops;
