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

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

var getElementsByClassName = function(className, element) {
var element = element || document.body;
var results = [];

children_results = [].map.call(element.children, function(element) {
  return getElementsByClassName(className,element)[0];
});
if ([].indexOf.call(element.classList, className) !== -1) {
  results.push(element);
} else if (children_results){
  results = results.concat(children_results);
}

return results.clean();
};


// document.body.children[21].children[0].children[0].classList
// document.body.childNodes[28].childNodes[0].childNodes[0].classList

  // var result = [],
//       nodes = document.body.childNodes,
//       initClass,
//       type = $.type(className);

// if (type === 'string') {
//   console.log(document.getElementsByClassName("targetClassName"));
//   console.log('-------kool story---------');
//   console.log(nodes);

//   initClass = className;
//   result = getElementsByClassName(nodes);
// }
//   for (var i = 0; i < nodes.length; i++) {
//     if (nodes[i].hasOwnProperty('classList')) {
//       var hi = [].slice.call(nodes[i].classList);

//       for (var x = 0; x < hi.length; x++) {
//         if (initClass === hi[x]) {
//           result.push(nodes[i]);
//         }
//       }

//     }
//   }
//   console.log(result);
//   return result;
