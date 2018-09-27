var words = ["ground", "control", "to", "major", "tom"];

var map = function (arr, callback) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]))
  }
  return result
}


console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));