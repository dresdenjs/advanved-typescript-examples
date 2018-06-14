export class Human {

  eat(): void {}
  walk(): void {}
  // think(): void {}

}

export class Animal {

    eat(): void {}
    walk(): void {}
    // fly(): void {}

}

export function makeSoylentGreen(ingredient: Human): void {
  return undefined;
}

const gary = new Human();
const cheetah = new Animal();

// makeSoylentGreen(gary);
// makeSoylentGreen(cheetah);

export const struturalTypingTest = gary === cheetah ? 'NO WAY SAME' : 'OF COURZ NOT';

