// 문자열
const str: string = 'hello';

// 숫자
const num: number = 10;

// 배열
// 방법 1
const arr: Array<number> = [1, 2, 3];
// 1-1 배열의 요소로 number만 가능
// 1-2 배열 타입은 '대문자'로 시작
// 방법 2
const items: number[] = [1, 2, 3];

// 튜플
const address: [number, string, boolean] = [1, '하나', true];

// 객체
// 방법1 (기본 버전)
const obj: object = {};
// 방법2 (구체적인 버전)
const obj2: {name: string, age: number} = {
    name: 'Liz',
    age: 29
}


