import * as Lint from 'tslint';

export function _Event(optional?): Function {
    return function (constructor: Function) {
    };
}

// all Events should be named Event

@_Event()
class MySimpleEvent {

}
