var test = 66;
var test2 = test.toString().split('');
for (var i = 0; i < test2.length; i++) {
  // warning: buggy script
  test2[i] = parseInt(test2[i],10);
  if (test2[i] && test2[i + 1] % 2 == 0) {
    console.log('ding');

  }
