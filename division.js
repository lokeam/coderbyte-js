var division = function(num1, num2){
  if (! num2) {
    return num1;
  }
  return division(num2, num1 % num2);

};
