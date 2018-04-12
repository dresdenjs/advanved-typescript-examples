import { Human } from '../structural-typing/example';

export enum EaterType {
    Carnivore,
    Vegetarian,
    Flexitarian,
}

export enum explicitEaterType {
    Carnivore = 'ME_LIKE_MEAT',
    Vegetarian = 'ME_LIKE_FLOWERZ',
    Flexitarian = 'WHAT_TIME_IS_IT'
}

export enum binaryEaterType {
    YES,
    NO
}

export class EvilHuman extends Human {

    readonly eaterType = EaterType.Carnivore;
    grawl() {}

}

export class NiceHuman extends Human {

    readonly eaterType = EaterType.Vegetarian;
    meow() {}
}

class BinaryHuman extends Human {

    readonly eaterType = 0;
}

class RealBinaryHuman extends Human {

    readonly eaterType = binaryEaterType.YES;
}

function allowRebirth(human: NiceHuman): void {
    return;
}

const alice = new EvilHuman();
const bob = new NiceHuman();
const alpha = new BinaryHuman();
const beta = new RealBinaryHuman();

// allowRebirth(alice);
// allowRebirth(alpha);
// allowRebirth(beta);
