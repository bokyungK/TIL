// 타입 추론 기본 1
const a; // a -> any type
const b = 10; // b -> number type

function getC(c) { // c -> number type
    const d = 'hi'; // d -> string type
    return b + c; // return type : number + string => string
}

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

const shoppingItem: DetailedDropdown<number>= {
    value: 1,
    title: 'hello',
    description: 'hi',
    tag: 2
}

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

const shoppingItem: DetailedDropdown<number>= {
    value: 1,
    title: 'hello',
    description: 'hi',
    tag: 2
}