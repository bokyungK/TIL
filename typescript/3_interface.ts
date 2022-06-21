interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const Liz: User = {
    age: 29,
    name: '보경'
};

// 함수에 인터페이스 활용
function getUser(user: User) { // User interface 형식만 받겠다고 정의
    console.log(getUser);
}
const Nina = {
    age: 33,
    name: '현진'
}
getUser(Nina);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
 }

// 인덱싱에 인터페이스를 활용
interface StringArray {
    [index: number]: string;
}

const testArr : StringArray = ['a', 'b', 'c'];
// testArr[0] = 10; // interface 위반


// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

const newObj: StringRegexDictionary = {
    // cssFile: 'css';  // interface 위반
    cssFile: /\.css$/,
}

// 인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    // name, age는 extends 사용하면 적어주지 않아도 상속
    language: string;
const bk: Developer = {
    // language: 'ts' // 상속받은 name과 age 작성하지 않아 에러
}
