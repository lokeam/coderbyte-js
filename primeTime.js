var primeTime = function(num){
  var check = true;
  if (num < 2 || Math.round(num) != num) {
    check = false;
    return check;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      check = false;
    }
  }
  return check;
};

primeTime(0);
