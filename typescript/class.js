class Person {
    constructor(name, age) {
        console.log('생성되었습니다');
        this.name = name;
        this.age = age;
    }
}

const seho = new Person('세호', 30);
console.log(seho); // 생성되었습니다 (줄바꿈) Person ~