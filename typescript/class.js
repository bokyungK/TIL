// 1
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const seho = new Person('세호', 30);

// 2
class Person {
    constructor(name, age) {
        console.log('생성되었습니다');
        this.name = name;
        this.age = age;
    }
}
const seho = new Person('세호', 30);

// => 1(생성자 함수) 2(클래스)**의 내부적인 로직은 같고, 작성 방식이 다르다.