// test cases are described in fixtures.js
describe("getElementsByClassName", function(){

  it("should match the results of calling the built-in function", function(){
    htmlStrings.forEach(function(htmlString){
      var $rootElement = $(htmlString);
      $("body").append($rootElement);

      var result = getElementsByClassName("targetClassName");
      var expected = [].slice.call(document.getElementsByClassName("targetClassName"));
      expect(result).toEqual(expected);

      $rootElement.remove();
    });
  });

});
