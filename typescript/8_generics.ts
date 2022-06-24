// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText('하이'); // text의 타입을 인수에서 전달
// logText<string>('Hi'); // 명시적으로 타입 전달

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<bolean>(true);