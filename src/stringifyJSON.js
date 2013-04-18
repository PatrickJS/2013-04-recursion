// // this is what you would do if you liked things to be easy:
// // var stringifyJSON = JSON.stringify;

// // but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj) {
  console.log(obj);
  // your code goes here. mmk
  var result = '',
      type = $.type(obj);

  switch(type) {
    case 'string':
      result = '"' + obj + '"';
      break;
    case 'array':
      result += '[';
      for (var i = 0; i < obj.length; i++) {
        result += '' + stringifyJSON(obj[i]) + ',';
      }
      result += ']';
      break;
    case 'object':
      result += '{';
      if (!obj.hasOwnProperty('undefined')) {
        for(var key in obj){
          result += '' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      result += '}';
      break;
    default:
      result += '' + obj + '';
    break;
  }
result = result.replace(/,}/, '}').replace(/,]/, ']');
return result;
};
