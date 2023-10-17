const input = require ('readline-sync')
//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
 constructor(name, mass,scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
 }


}

let newCrewCanidate = new canidate ("Bubba Bear","135kg","88","85","90")
let newCrewCanidate1 = new canidate ("Merry Maltese","1.5kg","93","88","97")
let newCrewCanidate2 = new canidate ("Glad Gator","225kg","75","78","62")

console.log(newCrewCanidate);
console.log(newCrewCanidate1);
console.log(newCrewCanidate2);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.