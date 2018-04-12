function produceThings<T>(thing: T, count: number): T[] {
    const helper = new Array(count);
    return helper.map(() => thing);
}

// mapped types

export interface Person {

    name: string;
    age: number;
    hungry: boolean;

};

export type JustHungryPerson = Pick<Person, 'hungry'>;

function nameAHungryPerson(person: JustHungryPerson) {
    // console.log(person.name)
}

// Readonly<T> for making all properties readonly, Partial<T> make all properties of optional, Record

export type AlwaysJustHungryPerson = Readonly<JustHungryPerson>;

function makeAHungryPersonFull(person: AlwaysJustHungryPerson) {
    // person.hungry = false;
}


