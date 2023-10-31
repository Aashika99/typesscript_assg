"use strict";
class Astronaut {
    constructor(name, mass) {
        this.astroName = '';
        this.massKg = 0;
        this.astroName = name;
        this.massKg = mass;
    }
}
const astronaut1 = new Astronaut("John", 100);
console.log(astronaut1);
class Cargo {
    constructor(material, mass) {
        this.cargoMaterial = '';
        this.massKg = 0;
        this.cargoMaterial = material;
        this.massKg = mass;
    }
}
const cargo1 = new Cargo("Food", 100);
console.log(cargo1);
class Rocket {
    constructor(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items) {
        return items.reduce((totalMass, item) => totalMass + item.massKg, 0);
    }
    currentMassKg() {
        const cargoMass = this.sumMass(this.cargoItems);
        const astronautMass = this.sumMass(this.astronauts);
        return cargoMass + astronautMass;
    }
    canAdd(item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
const rocket = new Rocket("Saturn V", 20000);
console.log(rocket.addCargo(cargo1));
console.log(rocket.addAstronaut(astronaut1));
console.log(rocket.currentMassKg());
