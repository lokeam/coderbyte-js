/*

Using the JavaScript language, have the function FirstReverse(str)
take the str parameter being passed and return the string in reversed order.

*/

var firstReverse = function(str){
	var reversed = '';
	for (var i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
};
