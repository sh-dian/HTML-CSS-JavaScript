/*Lookups object*/
function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
    };

    result = lookup[val];
    return result;
}

console.log(phoneticLookup("alpha"));

//Testing objects for properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){

    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp]
    }else{
        return "Not Found"
    }

}

console.log(checkObj("gift"));