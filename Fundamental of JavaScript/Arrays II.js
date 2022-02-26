//Nested Arrays
var ourArray = [["Universe", 1], ["Everything", 2]];
console.log(ourArray);
console.log(ourArray[0]);
console.log(ourArray[1]);
console.log(ourArray[0][1]);


//Manipulated Array with push & pop (remove last element)
console.log("\nManipulated Array with PUSH AND POP");
var num = [1,2,3];
console.log("Array elements before push : " + num);

var remove = num.pop();
console.log("Value that been remove : " + remove);
console.log("Array elements after pop : " + num);

num.push([4,5,6]);
console.log("Array elements after push : " + num);
console.log("\nArray elements before pop : " + num);

var remove = num.pop();
console.log("Array elements after pop : " + num);
console.log("Value that been remove : " + remove);


//Manipulated Array with shift (remove first element) & unshift
console.log("\nManipulated Array with SHIFT AND UNSHIFT");
var x = [10,20,30]
console.log("Array elements after pop & before shift: " + x);

x.shift(); //remove 10 from list
console.log("Array elements after shift : " + x);

x.unshift(10); //you can unshift the value with any value (either same or new)
console.log("Array elements after unshift : " + x);