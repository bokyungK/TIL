function logMessage(value: string) {
    console.log(value);
}
logMessage('hello');
logMessage(100); // eslint error

// 해결 방법
// value의 type을 any로 변경

// 해결 방법2 (타입의 특성을 지키는 방법) => 유니온 타입
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toString(); // 유니온 타입 장점 : 타입 가드
    }
    if (typeof value === 'string') {
        value.toLocaleUpperCase();
    }
    throw new TypeError('value must be string or number'); // throw error
}
logMessage('hello');
logMessage(100);



// 유니온 타입의 특징
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// union type
function askSomeone(someone: Developer | Person) {
    someone.name;
}
// 호출 관점
askSomeone({ name: 'developer', skill: 'typescript' });
askSomeone({ name: 'designer', age: 25 });


// inersection type
function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill;
}
// 호출 관점
askSomeone({ name: 'developer', skill: 'typescript'}); // age까지 넘기지 않아 eslint error
askSomeone({ name: 'developer', skill: 'typescript', age: 25}); 