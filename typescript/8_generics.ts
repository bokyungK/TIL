// interface with generic

    // first example : no generic
// interface Dropdown {
//     value: string,
//     selected: boolean
// }

    // second example : use generic
interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<number> = { // set generic type for interface "Dropdown"
    value: 10,
    selected: true
}


// how to restrict type with generic
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length); // error
    return text;
}
logTextLength<string>(['hi']);
