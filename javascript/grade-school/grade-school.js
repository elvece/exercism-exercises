function School(){
  var roster = {};
  this.roster = function(){
    return roster;
  };
  this.add = function(name, grade){
    if (!roster.hasOwnProperty(grade)){
      roster[grade] = [];
      roster[grade].push(name);
    } else
      roster[grade].push(name);
      roster[grade].sort();
  };
  this.grade = function(grade){
    var gradeRoster;
    if (!roster.hasOwnProperty(grade)){
      roster[grade] = [];
      gradeRoster = roster[grade];
    } else gradeRoster = roster[grade].sort();
    return gradeRoster;
  };
}
module.exports = School;
