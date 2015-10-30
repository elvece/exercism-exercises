//factor number
//if factor contains 3 = pling
//if factor contains 5 = plang
//if factor contains 7 = plong
//if none, digit as string

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

console.log(getPrimeFactors(10));

var Raindrops = function() {};

Raindrops.prototype.convert = function(input) {
  var primes = getPrimeFactors(input);
  for (var i = 0; i < primes.length; i++) {
    if (primes[i] === 3){
      return 'Pling';
    }
    if (primes[i] === 5){
      return 'Plang';
    }
    if (primes[i] === 7){
      return 'Plong';
    } else {
      return input.toString();
    }
  }
};

//testing
var drops = new Raindrops();
console.log(drops.convert(10));

module.exports = Raindrops;
