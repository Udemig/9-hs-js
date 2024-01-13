import age, { name } from "./person.js";
// import { message } from "./message.js";
console.log("merhaba");
// hata ayıklayıcı
//  javascriptin yürütülmesini durdurur ve (varsa) hata ayıklama işlevini çağırır
// let a = 10;
// debugger;
// console.log(a);
// const b = 20;
// b = "st";
// debugger;
// console.log(b);
// alert("mesaj");

// console.log(a * b);

// Tip denetleme =,==,===
let x = 10;
// değer kontrolü
if (x == 10) {
  console.log("x 10dur");
  console.log(typeof x);
} else {
  console.log("hata verdi");
}
// değer kontrolü ve type kontrolü
if (x === 10) {
  console.log(`x:${x}`);
  console.log(typeof x);
} else {
  console.log("error");
}
// let name1 = true;
// if (typeof name1 == "string") {
//   console.log("namein tipi stringdir");
// } else if (typeof name1 == "number") {
//   console.log("bu bir sayıdır");
// } else {
//   console.log("türünü bulamadım");
// }

// let y = "20";
//! case switch yapısında type kontrolünü otomatik olarak yapar.
// switch (y) {
//   case "20":
//     alert("bu bir stringdir");
//     break;
//   case 20:
//     alert("bu bir numberdır");
// }

// let a = 10;
// a = 10 + 5;
// console.log(a);

// let b = 10;
// b += 5;
// console.log(b);

// x = 10;
// let y = "5";
// let z = x + y;
// console.log("z", z);
// console.log(typeof z);

// function myFunction(a) {
//   let power = 10;
//   return;
//   console.log(a * power);
//   let a1 = 20;
//   console.log(a1);
// }
// myFunction(20);

// const person1 = [];
// const number = [1, 2, 3, 4, 5, 6];
// console.log(typeof number);
// person1[0] = "name";
// person1[1] = "example";
// person1[3] = 44;
// console.log(person1[0]);
// console.log(person1);
// console.log(person1.length);

// person1["firstname"] = "Berkant";
// person1["lastname"] = "Doğu";
// person1["age"] = 25;
// console.log(typeof person1);
// console.log(person1.length);
// console.log(person1.lastname.length);
// console.log(person1.firstname.length);
// [{ firstname: "Berkant", lastname: "Doğu" }];

//todo undefined ile null arasındaki fark
// if (typeof myObj === "undefined") {
//   console.log("undefined");
// }
// if (typeof myObj === null) {
//   console.log("null");
// } else {
//   console.log(typeof myObj);
// }
// // boş
// const x2 = null;
// console.log(typeof null);
// console.log(x2);
// let x3 = null
// console.log(typeof x3);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // daha kötü
// for (let i = 0; i < number.length; i++) {
//   console.log(i);
// }
// // daha iyi
// const numberArrayLength = number.length;
// console.log(numberArrayLength);
// for (let i = 0; i < numberArrayLength; i++) {
//   console.log(i);
// }

// let person2 = "asasddasd";
// person2 = {
//   firstanme: "asdas",
//   lastname: "asdasdas",
//   age: 50,
//   eyeColor: "blue",
// };
// console.log(person2.eyeColor);
// const persons = [{ firstanme: "name", age: 33 }, 24];
// console.log(persons[0].age);
const persons1 = {
  fname: "ibrahim",
  lname: "ibrahim lastname",
  age: 22,
  city: "istanbul",
};
console.log(persons1["fname"]);
let txt = "";
for (let x in persons1) {
  console.log(x);
  txt += persons1[x];
  console.log(txt);
}
persons1.city = "antalya";
persons1.age = 35;
console.log(persons1.city);
// delete persons1.age;
// console.log(persons1);

// const myObj1 = {
//   name: "test",
//   age: 25,
//   cars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Audi",
//   },
// };
// console.log(myObj1.age);
// console.log(myObj1.cars.car1);
// console.log(myObj1.cars["car2"]);
// console.log(myObj1.cars["car3"]);
// console.log(myObj1["cars"]["car1"]);

const myObj2 = {
  name: "test",
  age: 55,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "x3", "x5"] },
    { name: "Audi", models: ["a3", "a4", "a5"] },
  ],
};
let carsName = "";

for (let i in myObj2.cars) {
  console.log(i);

  carsName += myObj2.cars[i].name;
  //   console.log(carsName);

  for (let j in myObj2.cars[i].models) {
    console.log(j);

    carsName += myObj2.cars[i].models[j];
  }
}

let name = "rest";
name.toLowerCase();

const numbers1 = [1, 2, 3, 4, 5, 6, 7];
