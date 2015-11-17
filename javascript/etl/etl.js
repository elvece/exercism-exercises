// first iteration
function transform(obj){
  var newSet = {};

    var newValue = Object.keys(obj);

    for (newValue in obj){
      var set = obj[newValue];
      for (var i = 0; i < set.length; i++) {
        newSet[set[i].toLowerCase()] = parseInt(newValue);
      }
    }

  return newSet;
}


//second iteration
function transform(obj){
  var newSet = {};

  Object.keys(obj).forEach(function(num){
    var score = parseInt(num);

    obj[num].forEach(function(letter){
      newSet[letter.toLowerCase()] = score;
    });
});
    return newSet;
}


module.exports = transform;

