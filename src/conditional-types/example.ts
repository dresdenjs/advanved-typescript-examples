type IsHungry = {
    hungry: boolean;
};

type NotHungry = {
    soSad: true;
};

type AlwaysHungry = {
    soSad: false;
};

type HumanLikeMe = {
    hungry: boolean;
    name: string;
};

type HungryOrNot<T> = T extends IsHungry ? AlwaysHungry : NotHungry;

type HungryMe = HungryOrNot<HumanLikeMe>;

// type BoxedValue<T> = { value: T };
// type BoxedArray<T> = { array: T[] };
// type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

// type T20 = Boxed<string>;  // BoxedValue<string>;
// type T21 = Boxed<number[]>;  // BoxedArray<number>;
// type T22 = Boxed<string | number[]>;  // BoxedValue<string> | BoxedArray<number>;

