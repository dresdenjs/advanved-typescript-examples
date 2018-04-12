// ->http://ideasintosoftware.com/typescript-advanced-tricks/
import {Person} from './example';

type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

type NeverHungryAgain = Omit<Person, 'hungry'>;

