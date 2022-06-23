const user = { name: '보경', age: 29 };
// const admin = { name: '보경', age: 29, role: 'admin'};

const admin = {};
admin.__proto__ = user; // user를 상속
admin.role = 'admin';

console.log(admin); // {role: "admin"}
