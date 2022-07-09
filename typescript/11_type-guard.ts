interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce (): Developer | Person{
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
const tony = introduce();
console.log(tony.skill); // error from Union
console.log(tony.name);

if ((tony as Developer).skill) {
    const skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    const age = (tony as Person).age;
    console.log(age);
}
// 이 경우에 타입 단언으로 작성하면 코드 복잡성이 높아짐 => 타입 가드 사용


// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;

}

if (isDeveloper(tony)) {
    tony.skill
} else {
    tony.age
}
// => 타입 단언으로 작성한 것에 비해 아주 간단해짐