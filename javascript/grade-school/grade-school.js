function School(){
  var roster = {};
  this.roster = function(){
    return roster;
  };
  this.add = function(name, grade){
    if (!roster.hasOwnProperty(grade)){
      var arr = [];
      roster[grade] = arr;
      arr.push(name);
    } else {
      roster[grade].push(name);
    }

  };
}
module.exports = School;
