//Class declaration
class SpaceShuttle{

    //class constructor
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

//class object
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);