//Arrays - store data (its length and type are dynamic)

let food = ['burger', 'fried rice'];
console.log(food);

//access elements based on index
console.log("\n", food[0]);

/*In JavaScript, you can increase the length of array by adding new elements
food array already have 2 elements, so the size is 2*/
food[2] = 'noodles'

//array always start with index 0, so now we assign new value at index 2 that make array size become 3 (0,1,2)
console.log("\n", food);

//In JavaScript, we can assign different data type into an array
food[3] = 3
console.log("\n", food);

//Check the array length
console.log("\n", food.length);