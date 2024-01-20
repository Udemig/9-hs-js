// import age, { name } from "./person.js";
// import { message } from "./message.js";
// import { person } from './message';
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
// let x = 10;
// // değer kontrolü
// if (x == 10) {
//   console.log("x 10dur");
//   console.log(typeof x);
// } else {
//   console.log("hata verdi");
// }
// // değer kontrolü ve type kontrolü
// if (x === 10) {
//   console.log(`x:${x}`);
//   console.log(typeof x);
// } else {
//   console.log("error");
// }
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
// const persons1 = {
//   fname: "ibrahim",
//   lname: "ibrahim lastname",
//   age: 22,
//   city: "istanbul",
// };
// console.log(persons1["fname"]);
// let txt = "";
// for (let x in persons1) {
//   console.log(x);
//   txt += persons1[x];
//   console.log(txt);
// }
// persons1.city = "antalya";
// persons1.age = 35;
// console.log(persons1.city);
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

// const myObj2 = {
//   name: "test",
//   age: 55,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "x3", "x5"] },
//     { name: "Audi", models: ["a3", "a4", "a5"] },
//   ],
// };
// let carsName = "";

// for (let i in myObj2.cars) {
//   console.log(i);

//   carsName += myObj2.cars[i].name;
//   //   console.log(carsName);

//   for (let j in myObj2.cars[i].models) {
//     console.log(j);

//     carsName += myObj2.cars[i].models[j];
//   }
// }

// let name = "rest";
// name.toLowerCase();

// const numbers1 = [1, 2, 3, 4, 5, 6, 7];

const person1 = {
  firstname: "test",
  lastname: "example",
  isStudent: false,
  id: 123123,
  fullName: () => {
    person1.firstname = "test1";
    // return person1.firstname;
  },
  changeIsStudent: function () {
    this.isStudent = true;
    return this.isStudent;
  },
  number: {
    sayi1: 1,
    sayi2: 2,
    sayi3: 3,
  },
};
// console.log(person1.fullName());
// console.log(person1.changeIsStudent());
// person1.id = function (number) {
//   return (this.id = number);
// };
// person1.firstname = "ömer";
// console.log(person1.id(34));
// console.log(person1);

// const pEtiketi = document.getElementById("pEtiketi");
// pEtiketi.innerHTML = person1.firstname;

// console.log(person1);
// const myArray = Object.values(person1);
// console.log(myArray);

// stringfy:içerisine gönderilen değeri stringe çevirir
// let myString = JSON.stringify(person1);
// console.log(myString);
// console.log(typeof myString);

// const arr = ["test", "example", true, { name: "test" }];
// let myString1 = JSON.stringify(arr);
// console.log(myString1);
// const text = "tect";
// console.log(text);

// const person = {
//   name: "test",
//   lastname: "example",
//   age: 30,
//   city: "istanbul",
//   language: "en",
//   // bir nesnenin belirli bir özelliğine erişildiğinde çalıştırılacak bir işlevi tanımlayan özelliktir
//   // get metodutla return ile dışarı veri aktarırız
//   get fullName() {
//     return this.name + " " + this.lastname + this.age;
//   },
//   get lang() {
//     return this.language;
//   },
//   // set işlemi de gelen veriyi istediğimiz değişkene aktarırız
//   set lang1(x) {
//     this.language = x.toUpperCase();
//   },
// };
// console.log(person.fullName);
// const dil = person.lang;

// person.language = "tr";
// console.log(person.language);

// person.lang1 = "france";
// console.log(person.language);

const person = {};
console.log(person);
/*
 * person: özelliğin ekleneceği veya değiştirileceği nesne
 * "fullname": Eklenen veya değiştirilen özelliğin adı
 * descriptor: Özelliğin nasıl tanımlanacağonı belirten özellikleri içerir.
 * value:özelliğin değeri
 * writable:Özelliğin değerinin değiştirilebilir olup olmadığını belirten bir boolean değer.
 * configurable: Özelliğin daha sonra değiştirilebilir veya silinebilir olup olmadığını kontrol eden boolean değer
 */
Object.defineProperty(person, "fullname", {
  value: "Emrullah Örs",
  writable: true,
  configurable: true,
});
person.fullname = "test";
console.log(person);
Object.defineProperty(person, "city", {
  value: "istanbul",
  writable: false,
  configurable: true,
});
console.log(person);

const obj = { counter: 10 };
console.log(obj.counter);
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});
// obj.reset;
// console.log(obj.counter);

// obj.increment;
// console.log(obj.counter);

// obj.decrement;
// console.log(obj.counter);

// obj.decrement;
// console.log(obj.counter);

// obj.add = 15;
// console.log(obj.counter);

// obj.subtract = 10;
// console.log(obj.counter);
// nesne oluşturma fonksiyonu
// function Person(first, last, age, eye) {
//   // özellikleri tanımla(property)
//   this.first = first;
//   this.last = last;
//   this.age = age;
//   this.eye = eye;
//   // metot tanımla
//   this.getFullName = function () {
//     return this.first + " " + this.last;
//   };
//   this.changeName = function (name) {
//     this.last = name;
//   };
// }
// // const Person = {
// //   first: "asdsad",
// //   first: "asdsad",
// //   first: "asdsad",
// // };

// // nesne oluştur

// // const person2 = new Person("test", "example", 22, "brown");
// // console.log(person2.getFullName());
// // // const person3 = Person("sasd", "asasd", 32, "asdas"); new hatası verir
// // const person3 = new Person("asdas", "asdasd", 33, "green");
// // console.log(person3);
// // person3.changeName("ali");
// // console.log(person3);

// const str = new String("test");
// const str1 = new String("example");
// console.log(str);
// console.log(str1);
// const number = new Number(22);
// const number1 = new Number(12312322);
// console.log(number);
// console.log(number1);
// const boolean = new Boolean(true);
// console.log(boolean);
// const object = new Object({ name: "tesst", age: 22 });
// console.log(object);
// const arr = new Array([1, 2, 3, 4, 5], "test", true, { name: "tesst" });
// console.log(arr);
// const date = new Date();
// console.log(date.getMonth());
// const str3 = "test";
// const str4 = new String("test");
// console.log(str3);
// console.log(str4);
// function Person(first, last, age, eye) {
//   // özellikleri tanımla(property)
//   this.first = first;
//   this.last = last;
//   this.age = age;
//   this.eye = eye;
//   // metot tanımla
//   this.getFullName = function () {
//     return this.first + " " + this.last;
//   };
//   this.changeName = function (name) {
//     this.last = name;
//   };
// }
// // Person.prototype.nationality = "Türk";
// const person5 = new Person("test", "example", 32, "green");
// console.log(person5);

// function myNumbers() {
//   let n = 0;
//   return {
//     next: function () {
//       n += 10;
//       return { value: n };
//     },
//   };
// }
// const n = myNumbers();
// console.log(n);
// console.log(n.next());
// console.log(n.next());
// console.log(n.next());
// console.log(n.next());

// function greet(name, age) {
//   const age1 = age;
//   console.log(age1, name);
// }
// greet("test", 32);

//! Objects Sets

const number = [1, 2, 3, 3, 4, 3, 1, 7, 43, 7, 9, 8];

number.push(10);
console.log(number);
// değerlerde bir set oluşturma
const essizNumber = new Set(number);
// değer ekleme silme
essizNumber.delete(8);
essizNumber.delete(2);
essizNumber.add(99);
console.log(essizNumber);
let mySet = new Set(["elma", "portakal", "muz"]);
mySet.delete("elma");
console.log(mySet);
// Bir değerin set içinde olup olmadığını kontrol edebiliriz.
console.log(mySet.has("elma"));

const letters = new Set(["a", "b", "c", "d", "f"]);
console.log(letters);
let text = "";
letters.forEach((letter) => {
  text += letter;
});
letters.forEach(function (value) {
  text += value;
});
console.log(text);
console.log(letters.size);
const keysIterator = letters.keys();
console.log(keysIterator);
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());
// done:Iteratörün tamamlandığını gösterir.

const myIterator = letters.entries();
console.log(myIterator);
let text1 = "";
for (const entry of myIterator) {
  console.log(entry);
  text1 += entry;
}
console.log(text1);
console.log(typeof myIterator);
console.log(letters instanceof Set);

//! Objects Map
// anahatar-değer çifleri üzeirnde işlem yapmak için kullanırız
const myMap = new Map();
console.log(myMap);
myMap.set("name", "test");
myMap.set("test", { key: "obj" });
myMap.set("age", 23);
// deperleri güncelleme
myMap.set("name", "example");
console.log(myMap);
// değerlere erişim
const name1 = myMap.get("name");
console.log(name1);
console.log(myMap.get("test"));
console.log(myMap.has("name"));
console.log(myMap.size);

for (const [key, value] of myMap) {
  console.log(key, value);
}

const restaurantMenu = new Map();
// menüye öğeleri ekleme
restaurantMenu.set("Kahvaltı Tabağı", 20);
restaurantMenu.set("Pizza", 100);
console.log(restaurantMenu);
// menüde bir öğenin fiyatını kontrol etme
console.log(`Kahvaltı Tabağı Fiyatı: ${restaurantMenu.get("Kahvaltı Tabağı")}`);
// menüde bir öğeyi kontrol etme
console.log(`Menüde çıtır tavuk var mı? ${restaurantMenu.has("Çıtır Tavuk")}`);
console.log(restaurantMenu);
// menüdeki öğeleri listeleme
restaurantMenu.forEach((price, product) =>
  console.log("değer", price, "anahtar", product)
);
console.log(`Menüde ${restaurantMenu.size} öğe bulunmaktadır`);
restaurantMenu.delete("Pizza");
console.log(`Menüde ${restaurantMenu.size} öğe bulunmaktadır.`);
console.log(restaurantMenu);
//! Fonksiyon Tanımlamalar
// function example1(name) {
//   console.log(name);
// }
// example1("Ömer");

// var name2 = function (name) {
//   console.log(name);
// };
// name2("uğur");

// var name2 = (name) => {
//   console.log(name);
// };
// name2("example");

// var name2 = new Function("name", `console.log("Merhaba" +" " + name + "!")`);
// name2("exampple");

// function add(a, b) {
//   return a + b;
// }
// let result = add(5, 10);
// console.log(result);

//! Fonksiyon Parametreleri
// varsayılan parametreler
function ismiGetir(name = "Example") {
  console.log(name);
}
ismiGetir();
ismiGetir("ömer");

function myFunction(x, y = 10) {
  return x + y;
}
const result = myFunction(5, 20);
console.log(result);

//! rest parametresi
function sum(...numbers) {
  console.log(numbers);
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 100));

function calculateTotal(...prices) {
  // prices: rest parametresi ile geçilen ürün fiyatlarını içeren bir dizi oluşturduk
  console.log(prices);
  console.log(prices.reduce((toplam, ucret) => toplam + ucret, 0));
  return prices.reduce((toplam, ucret) => toplam + ucret, 0);
  // 0 : initial değer,toplama işlemine başlanılacak değer
}
//
const telefon = 10000;
const tablet = 20000;
const pc = 55000;
const totalDeger = calculateTotal(telefon, tablet, pc);
console.log("Toplam Tutar", totalDeger);

//! spread operatörü
function personInfo(name, age, city) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("City", city);
}
const person2 = ["ali", 30, "istanbul"];
// personInfo(person2[0], person2[1], person2[2]);
console.log(...person2);
personInfo(...person2);
// personInfo("ali", 30, "istanbul");

// const persons = {
//   firstname: "Test",
//   lastname: "example",
//   fullName: function () {
//     return this.firstname + " " + this.lastname;
//   },
// };
// console.log(persons.fullName());
//! call():Bir fonksiyonu belirli bir "this" değeri ve ayrı ayrı geçilen parametreleri çağırmak için kullanılır.
const person3 = {
  fullName: function (city, country) {
    return (
      this.firstname +
      " " +
      this.lastname +
      " " +
      this.age +
      " " +
      city +
      " " +
      country
    );
  },
};

const person10 = {
  firstname: "ali",
  lastname: "test",
};
const person4 = {
  firstname: "veli",
  lastname: "test",
  age: 40,
};
const sonuc = person3.fullName();
console.log(sonuc);
const result1 = person3.fullName.call(person4, "oslo", "norway");
console.log(result1);

//! apply()
function sum1(a, b, c) {
  console.log(a, b, c);
  return a + b;
}

const numbers = [5, 10, 40];
const result3 = sum1.apply(null, numbers);
console.log(result3);

const person6 = {
  name: "test",
  greet: function () {
    console.log("merhaba" + this.name);
  },
};
const sonuc1 = person6.greet();
console.log(sonuc1);
const person9 = {
  name: "Ali",
};

person6.greet.apply(person9);
