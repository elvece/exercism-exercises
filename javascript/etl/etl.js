//old: key to value object, which is array
//new: key to value object, lowercase letter to point number
//anything that initially has a key of 1, switch it to the value of each letter in the array
//for each value in the array, make the index a key and the value the old key

function transform(obj){
  var newSet = {};
  //get first key in entered object
  //loop through the array at this key
  //make each index a key in the new object
  //make the key of the initial key/value pair the new value of each index
  //for each key, loop through array and make each index have the value of the key

  for (var key in obj) {


    //gets the key ==> ['1'] ==> 1
    var newValue = Object.keys(obj)[0];

    //gets the value of key ==> ['A', 'E', 'I', 'O', 'U']
    for (newValue in obj){
      //loop through this array and set each index equal to newValue

      //make into new obj
      var set = obj[newValue]
      for (var i = 0; i < set.length; i++) {
        newSet[set[i].toLowerCase()] = parseInt(newValue);

      };


    }

  }
  return newSet

}

module.exports = transform;

// transform({ 1: ['A', 'E', 'I', 'O', 'U'] })
