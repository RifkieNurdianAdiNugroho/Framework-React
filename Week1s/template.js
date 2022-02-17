let fname = 'Rifkie';
let lname = 'Nurdian';
let age = prompt("Masukkan umur Rifkie Nurdian!");

//Old Ways
//let result = fname + ' ' + lname + 'is' + age + 'years old';
//alert(result);

//Memakai template strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);