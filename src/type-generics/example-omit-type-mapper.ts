/**
 * Make all properties in T nullable
 */
import {JustHungryPerson} from './example';

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
    };

// const ronny: JustHungryPerson = {
//     hungry: null
// }




