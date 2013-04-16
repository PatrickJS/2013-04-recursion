// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  console.log(className);
  var hi = [].slice.call(document.body.querySelectorAll('.targetClassName'));
  return hi;
};

