/*1*/
let dog = {
    name: "Dog",
    numLegs: 2,
};
/*2*/
let dog = {
    name: "Spot",
    numLegs: 4
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
/*3*/
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs() {
        return `This dog has ${this.numLegs} legs.`
    }
};

dog.sayLegs();
/*4*/
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
/*5*/
function Dog() {
    this.name = "Bob";
    this.color = "black";
    this.numLegs = 4;
}
/*6*/
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();
/*7*/
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
};

let terrier = new Dog();
/*8*/
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(5);
myHouse instanceof House;

/*9*/
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
// Only change code below this line
/*10*/
function Dog(name) {
    this.name = name;
    Dog.prototype.numLegs = 4;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
/*11*/
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for ( let prop in beagle) {
    if(beagle.hasOwnProperty(prop)) {
        ownProps.push(prop);
    } else {
        prototypeProps.push(prop);
    }
};

/*12*/
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}
/*13*/
/*14*/
/*15*/
/*16*/
/*17*/
/*18*/
/*19*/
/*20*/
/*21*/
/*21*/
/*22*/