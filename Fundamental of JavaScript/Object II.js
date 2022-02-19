var classmate = {
    1 : "Ali",
    2 : "Abu",
    3 : "Aina"
};

console.log("Before any process : " , classmate);

//Update an object properties
classmate[3] = "Amad"
console.log("\nAfter update : " , classmate);

//Add an object properties
classmate[4] = "Afiq"
console.log("After add : " , classmate);

//Delete an object properties
delete classmate[1];
console.log("After delete : " , classmate);

//Nested Object
var workers = {
    a: {
        a1: {
            c1 : "Abu",
            c2 : "Aina"
        }
    }
};

console.log("\n", workers.a.a1);