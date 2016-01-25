// Write a program that will calculate the date that someone turned or will celebrate their 1 Gs anniversary.

// A gigasecond is one billion (10**9) seconds.

function Gigasecond(date) {
  this.birthday = date;
}

Gigasecond.prototype.date= function() {
  var dayInSeconds = 24 * 60 * 60,
      gigasecond = (10*10*10*10*10*10*10*10*10),
      gsInDays = parseInt(gigasecond / dayInSeconds),
      gsAnni = this.birthday * gsInDays;
      //how do you split apart the data object to add days to it?
      console.log(gsAnni)
  return gsAnni;

};

module.exports = Gigasecond;