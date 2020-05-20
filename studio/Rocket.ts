import { Astronaut } from "./Astronaut";
import { Cargo } from './Cargo';
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number{
        let total: number = 0;
        for (let i = 0; i < items.length; i++){
            total += items[i].massKg;
        }
        return total;
    }

    currentMassKg(): number {
        let combinedMass: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return combinedMass;
    }

    canAdd(item: Payload): boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        };
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }

}

