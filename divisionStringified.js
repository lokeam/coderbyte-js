var divisionStringified = function(num1, num2){
  var result = Math.round(num1 / num2);
  result = result+'';
  result = result.replace(/\B(?=(\d{3})+(?!\d))/g,',');
  return result;
};
