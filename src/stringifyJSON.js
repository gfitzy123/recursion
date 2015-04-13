var stringifyJSON = function (obj) {

// We must first check if the given object is a function, undefined, null
// A boolean, number, or a string.

  if(typeof obj === "function") {
    return undefined;
  }
  if(obj === undefined) {
    return undefined;
  }
  if(obj === null) {
    return "null";
  }
  if(typeof obj === "boolean") {
    return obj.toString();
  }
  if(typeof obj === "number") {
    return obj.toString();
  }
  if(typeof obj === "string") {
    return '"' + obj + '"';
  }
  
  var result = [];
  
  // If the given object is an array, we will iterate through the array and
  // check if each element is a boolean, undefined, etc. through calling our 
  // function recursively.

  if( Array.isArray(obj) ) {
		result = []; 
		for(var i = 0; i < obj.length; i++) {
			result.push(stringifyJSON(obj[i]));
		}
		return '[' + result + ']';
		}
	// If the object is an object, which will iterate through each key
	// And push each recreated key and value to the array.

		 else if( typeof obj === 'object' ) {
		for( var key in obj ) {
			if( stringifyJSON(obj[key])) {
				result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
			}
		}
	// Here, we are slicing the first and second to last elements of the array, eliminating the last comma from our 
	// results.
	
		return '{' + result.slice(0, result.length - 1) + '}';
	}
};
