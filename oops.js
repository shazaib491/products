class player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello wolrd`);
    }

    // getters and setters 
    get setName() {
        return this.name.toUpperCase()
    };
    set setName(val) {
            this.name = val;
        }
        // getters and setters 

}
class coach extends player {
    constructor(name, age, coachAge, record) {
        super(name, age)
        this.coachAge = coachAge;
        this.record = record;
    }
    static introduction() {
        console.log('hello coach');
    }
}

let virat = new coach('virat kohli', 18, 90, 'senior player')



// creating contructor using function

function Player(name, team) {
    this.name = name
    this.team = team
}
var coaches = new player('shazaib', 52)

// creating contructor using function


// directly pass object to this fucntion 
Player.prototype.sayHello = function() {
    console.log(`name is ${this.name} and age ${this.team}`)
}