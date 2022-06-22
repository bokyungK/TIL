// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

const bokyung: Person = {
    name: '보경',
    age: 29
}

type MyString = string;
const text: MyString = 'hello';

type Todo = { id: number; title: string; done: boolean };
function getTodo(todo: Todo) {
    
}