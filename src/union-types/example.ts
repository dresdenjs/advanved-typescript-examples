import {Animal, Human} from '../structural-typing/example';

// alias
type Mensch = Human;

const gary = new Human();

// whoIsCausingTrouble(gary);

function whoIsCausingTrouble(mensch: Mensch): void {
    return;
}

// union
type Being = Human | Animal;

// null checks
function isHisNameRonny(human: Human): void {
    return human.eat();
}

// isHisNameRonny(null);

// combine null + alias + union
type Unsure = never;

function sendMarkMyRelationShipStatus(status: 'MARRIED' | 'SINGLE' | 'COMPLICATED' | Unsure): void {}

// sendMarkMyRelationShipStatus(null);
// sendMarkMyRelationShipStatus(undefined);
// sendMarkMyRelationShipStatus();



