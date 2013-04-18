// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var htmlStrings = [
  "<p class='targetClassName'></p>",
  "<p class='otherClassName targetClassName'></p>",
  "<p><p class='targetClassName'></p></p>",
  "<p><p class='targetClassName'><p class='targetClassName'></p></p></p>",
  "<p><p></p><p><p class='targetClassName'></p></p></p>",
  "<p><p class='targetClassName'></p><p class='targetClassName'></p></p>",
  "<p><div class='somediv'><div class='innerdiv'><span class='targetClassName'>yay</span></div></div></p>"
];

var getElementsByClassName = function(className) {
var element = arguments[1] || document.body,
    results = [],
    has_class_name = [].indexOf.call(element.classList, className) !== -1,
    children_results = [].map.call(element.children, function(element) {
      return getElementsByClassName(className,element)[0];
    }).filter(function(e) {
      return e;
    });

if (has_class_name) {
  results.push(element);
} else {
  results = results.concat(children_results);
}

return results;
};
