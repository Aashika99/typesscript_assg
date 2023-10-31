interface Payload {
    massKg: number;
    name: string;
  }
  
  class Astronaut implements Payload {
    astroName: string = '';
    massKg: number = 0;
    constructor(name: string, mass: number) {
      this.astroName = name;
      this.massKg = mass;
    }
  }
  
  const astronaut1 = new Astronaut("John", 100);
  console.log(astronaut1);
  
  class Cargo implements Payload {
    cargoMaterial: string = '';
    massKg: number = 0;
    constructor(material: string, mass: number) {
      this.cargoMaterial = material;
      this.massKg = mass;
    }
  }
  
  const cargo1 = new Cargo("Food", 100);
  console.log(cargo1);
  
  class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
  
    constructor(name: string, totalCapacityKg: number) {
      this.name = name;
      this.totalCapacityKg = totalCapacityKg;
    }
  
    sumMass(items: Payload[]): number {
      return items.reduce((totalMass, item) => totalMass + item.massKg, 0);
    }
  
    currentMassKg(): number {
      const cargoMass = this.sumMass(this.cargoItems);
      const astronautMass = this.sumMass(this.astronauts);
      return cargoMass + astronautMass;
    }
  
    canAdd(item: Payload): boolean {
      return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
  
    addCargo(cargo: Cargo): boolean {
      if (this.canAdd(cargo)) {
        this.cargoItems.push(cargo);
        return true;
      } else {
        return false;
      }
    }
  
    addAstronaut(astronaut: Astronaut): boolean {
      if (this.canAdd(astronaut)) {
        this.astronauts.push(astronaut);
        return true;
      } else {
        return false;
      }
    }
  }
  
  const rocket = new Rocket("Saturn V", 20000);
  
  console.log(rocket.addCargo(cargo1)); 
  console.log(rocket.addAstronaut(astronaut1)); 
  console.log(rocket.currentMassKg()); 
  