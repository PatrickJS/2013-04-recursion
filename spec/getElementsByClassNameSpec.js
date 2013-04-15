var htmlStrings = [
  "<p class='targetClassName'></p>",
  "<p class='otherClassName targetClassName'></p>",
  "<p><p class='targetClassName'></p></p>",
  "<p><p class='targetClassName'><p class='targetClassName'></p></p></p>",
  "<p><p></p><p><p class='targetClassName'></p></p></p>",
  "<p><p class='targetClassName'></p><p class='targetClassName'></p></p>",
  "<p><div class='somediv'><div class='innerdiv'><span class='targetClassName'>yay</span></div></div></p>"
];

describe("getElementsByClassName", function(){

  it("should match the results of calling the built-in function", function(){
    htmlStrings.forEach(function(htmlString){
      var $rootElement = $(htmlString);
      $("body").append($rootElement);

      var result = getElementsByClassName("targetClassName");
      var expectedNodeList = Array.prototype.slice.call(document.getElementsByClassName("targetClassName"));
      var equality = _.isEqual(result, expectedNodeList); // why can't we use `===` here?
      expect(equality).toBeTruthy();

      $rootElement.remove();
    });
  });

});
// [4/13/13 4:27:07 PM] Carey W: var expectedNodeList = document.getElementsByClassName("targetClassName");
// [4/13/13 4:27:28 PM] Carey W: var expectedNodeList = Array.prototype.slice.call(document.getElementsByClassName("targetClassName"));
