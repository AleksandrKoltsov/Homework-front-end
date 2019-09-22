
function getRandom(min, max){

    return Math.floor(Math.random() * (max - min) + min);

}

function getrestOfLife(){

}

let quantity = 8,
    name = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    min = 3,
    max = 10,
    arrPlanets = [];

for(let i = 0; i < quantity; i++){

    let planet = {};

    planet.name = name[i]; 
    planet.lifeTime = getRandom(min, max);
    planet.restOfLife = getRandom(min, max);
    arrPlanets.push(planet);
}

console.info(arrPlanets);
