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


// how to restrict type of generic (1)
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length); // error
//     return text;
// }
// logTextLength<string>(['hi']);

// how to restrict type of generic (2) : use defined type
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength(10); // error
logTextLength({ length: 10 })

// how to restrict type of generic (3) : use keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
getShoppingItemOption('name'); // ShoppingItem의 키 값 중 하나만 제네릭 타입으로 넘길 수 있음
getShoppingItemOption('price');