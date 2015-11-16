
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



// function transform(obj){
//   var newSet = {};

//   //Object.keys(obj) = [ '1', '2', '3', '4', '5', '8', '10' ]
//   Object.keys(obj).forEach(function(element, index, array){

//     var set = parseInt(element);
//     // console.log(set)

//     array.forEach(function(letter){
//       newSet[letter.toLowerCase()] = set;
//     });

// });
//     return newSet;
// }


module.exports = transform;

