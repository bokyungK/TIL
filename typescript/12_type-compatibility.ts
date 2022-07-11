// interface
interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
}

let developer: Developer;
let person: Person;

developer = person; // error
person = developer;


// interface with class
interface Developer {
	name: string;
	skill: string;
}

class Person {
	name: string;
}

let developer: Developer;
let person: Person;

developer = new Person();


// function
let add = function (a: number) {
	// ...
}
let sum = function(a: number, b: number) {
	// ...
}

add = sum; // error
sum = add;


// generic
interface Empty<T> {
	// ..
}

let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

//------------------------------------------------------
interface NotEmpty<T> {
	data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2; // error
notEmpty2 = notEmpty1;