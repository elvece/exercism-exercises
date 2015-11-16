//first iteration
// function transform(obj){
//   var newSet = {};

//     var newValue = Object.keys(obj);

//     for (newValue in obj){
//       var set = obj[newValue];
//       for (var i = 0; i < set.length; i++) {
//         newSet[set[i].toLowerCase()] = parseInt(newValue);
//       }
//     }

//   return newSet;
// }


//second iteration
function transform(obj){
  var newSet = {};

  //Object.keys(obj) = [ '1', '2', '3', '4', '5', '8', '10' ]
  Object.keys(obj).forEach(function(element, index, array){
    var score = parseInt(element);
    var set = obj[element];

    set.forEach(function(element, index, array){
      newSet[element.toLowerCase()] = score;
    });
});
    return newSet;
}


module.exports = transform;

