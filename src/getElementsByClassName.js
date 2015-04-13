// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var result = [];

  var recursiveFunction = function (node) {

// If the node contains classes
    if (node.classList) {
      if (_.contains(node.classList, className)) {
//push the nodes that contain className to the result array
        result.push(node);
      }
    }
// If the node contains childnodes
    if (node.childNodes.length > 0) {
      for (var j = 0; j < node.childNodes.length; j++) {
// We must check each node for childNodes, and each chlildNode's classes (and then those classes that match className)
// And then push those matching nodes to the result array.

        recursiveFunction(node.childNodes[j]);
      }
    }
  }
  
  recursiveFunction(document.body);
  return result;

}
