const square = require('./square.js')
console.log("Area of Square is: ", square.area(5));
console.log("Area of Square is: ", square.perimeter(5));


/*

exports or module.exports#
All the variables or functions that we want to be accessible in other modules have to be exported. 
//There are two ways of exporting them: using exports or module.exports. 
Let’s see how they differ from each other.

The exports variable is available within a module’s file-level scope.
 It is assigned the value of module.exports before the module is evaluated.
  We can think of exports as a shorthand way of writing code. 
  Instead of writing module.exports.Something, we can write exports.
  Something. We are using this in our square.js file.

The module.exports object is created by the Module system. 
We can usually use the exports shorthand without ever needing to use module.exports. 
However, if we override exports by assigning it to something,
 else such as exports = function(){}, 
 then exports would no longer point to module.exports.
  This is because the reassignment breaks the reference between 
  module.exports and exports. Since module.exports is what really gets exported, 
  exports will no longer work as expected.
   In our shape.js file, since we are only exporting one class, 
   we can get away with assigning the class directly to module.exports.


*/