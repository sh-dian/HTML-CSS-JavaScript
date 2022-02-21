//Declare variable
var g = 10; //this is global variable because it declare outside the functions

function f1(){
    o = 5; //if you declare with var (var o = 5), the variable only can be use in this function
           //o become global variable automatically

    return o;
}

function f2(){
    var output = "";

    if(typeof g != "undefined"){
        output += "G Global: " + g;
    }

    if(typeof o != "undefined"){
        output += "\nO Global: " + o;
    }

    console.log(output);
}

f1();
f2();