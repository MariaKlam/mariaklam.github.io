console.log("Tere"); //Test andmete valjaprint
console.log("Tere2");
//Muutujad ehk variables
var text = "Hello World!"; //Muutuja tyyp / Muutuja nimetus/ Muutuja vaartus

var text2 = "Hello 2"; //String ehk tavaline tekst, tunnuseks ylakomad""
var number1 = 100; //Integer int, see on tais arv (koma ei saa olla!)
var komaga = 100.5; // Double / Float - ujuv komaga arv, tunnuseks on koma
var kaksik = false; // Boolean, ainult kaks v''rtust jah/ei. TRUE/FALSE. Kysimustele vastamiseks

//Teksti puhul l6pmatu, piirangud puuduvad. Tavaliselt yle integeri numbri vaja ei lahe.//

console.log(number1);
number1 = 9000807056654;
console.log(number1);
number1 = 9000807056655;
console.log(number1);
komaga = 900040404000404664466404.1;
console.log(komaga);

// BIT
/*
0000011
---3 bit systeem
et arvuti saaks aru, mis numbriga on tegemist. 7 on 3 biti piir!

0-000
2-001
3-011
4-100
5-101
6-110
7-111

---1 bit systeem Boolean
Boolean 1 bitine - 2 vaarust, true or false.
0 - false
1 - true

*/

//SEE ON TEKST, MITTE NUMBER, SELLEPARAST L6PMATU//
text2 = "90071992547409934444444444444444444";
text = "1111";
console.log(text2);
console.log(text);
console.log(parseInt(text2));
console.log(parseInt(text));

//Muutuja tyybiud on muudetavad. String --> Int --> Boolean--> String-->...
/*Kui muutujad vastavad sisule, kui tekst ainult tekst. Let vanad browserid ei suuda kaivitada, pigem let.*/

var x = "aaaa";
console.log(x);
x = 10;
console.log(x);

console.log(y);

var y = 0; // 1995 - 2015
let y2 = 0; // 2015 ->
const y3 = 0; // 2015 ->. Constant on meil muutumatu
const pi = 3.14;
const pi2 = "3.14";
const login = "Maria";
const pass = "1457";
//const pass = "1457"; Unikaalsed nimetused igal Muutujal

y = 1;
y2 = 1;
//y3 = 1;

console.log(y);
console.log(y2);
console.log(y3);

x = 1;
y = 1;
console.log(x + y); // Kui mõlemad muutujat on arvud siis on matemaatika
x = "1";
y = "1";
console.log(x + y); // Kui ei ole numbrid siis on teksti liitmine
x = 2;
y = "2";
console.log(x + y); // Kui üks muutujatest on String siis kõik muutujad on stringid
x = 10;
y = 4.5;
console.log(x * y);
console.log(x * y + 5);
console.log(x * (y + 5));
console.log("x + y = " + x + y);
console.log("x + y = " + (x + y));
console.log(x + " + " + y + " = " + (x + y));

var counter = 1;
console.log("Counter: ");
console.log(counter);
counter = counter + 1;
console.log(counter);
counter += 1;
console.log(counter);
counter++; // Ainult +1
console.log(counter);
console.log("----------------------");
x = 1;
y = 1;
console.log(x + y); // 1 + 1
console.log(x++ + y); // Kui ++ on muutuja lõpus siis seda tehakse viimasena, 1 + 1
console.log(x + y); // 2 + 1
console.log(++x + y); // Kui ++ on muutuja alguses siis seda tehakse esimesena. 3 + 1
console.log(--x + y);
console.log(x + 1 + y);
console.log(x + y);

console.log(x == y); // x = 2, y = 1
console.log(--x == y); // x = 1, y = 1
/*
== kas on võrdsed
>= kas on suurem ja võrdne
<= kas on väiksem ja võrdne
> kas on suurem
< kas on väiksem
! eitav ja saame ümberpöörduda
!= kas ei ole võrdsed
*/

console.log("!=" + (x != y));
console.log("==" + (x == y));
console.log("==" + !(x == y));

var student = { Nimi: "Dima", Vanus: 27, City: "Tallinn" }; // Võtmeid ja väärtusi, JSON objektiks (JavaScript Object Notation)
var studentName = "Dima";
var studentAge = 27;
var studentCity = "Tallinn";

console.log(student);
console.log(student.Nimi);
console.log(student.Vanus);
console.log(student.City);

// Array ehk loetelu
var cars = ["BMW", "Audi", "Tesla"]; // [] == Array, Array lugemine hakkab pihta "0"
console.log(cars); // Pikkus in 3, aga viimane element asub kohal 2
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

var students = [
  { Nimi: "Dima", Vanus: 27, City: "Tallinn", Grades: [5, 5, 4, 7] },
  { Nimi: "Dima2", Vanus: 27, City: "Tartu", Grades: [5, 5, 4, 7] },
  { Nimi: "Dima3", Vanus: 27, City: "Pärnu", Grades: [5, 5, 4, 7] },
];
console.log(students);
console.log(students[1].Nimi);
console.log(students[0].Grades[3]);

x = 15;
y = 10;
//console.log((x * 2) + y); // Kui on olemas üks se sama tehe siis teeme funktsiooni

sumTwoNum(x, y); // Funktsiooni välja kutsumine
sumTwoNum(x, y);
sumTwoNum(x, y);
sumTwoNum(x, y);
sumTwoNum(x, y);

// süntaks "function" nimetus sisend parameetrid
function sumTwoNum(num1, num2) {
  console.log(num1 * 3 + num2);
}

console.log(subtraction(2, 3, 5));
//                    -6                  -6 - -6 + -6 = -12
console.log(subtraction(2, 3, 5) + subtraction(2, 3, 5));

emptyFunction();

function emptyFunction() {
  console.log("EMPTY");
}

var nimi1 = "Dima";
var nimi2 = "Maarika";

function onClick1() {
  var para = document.getElementById("firstPara");
  para.innerHTML = "<strong>Test</strong>"; // InnerHTML muudab elemendi sisu
  console.log(para);
}

function onClick2(text) {
  var para = document.getElementById("firstPara");
  para.innerHTML = text; // InnerHTML muudab elemendi sisu
  console.log(para);
}

function onClick3() {
  var para = document.getElementById("span1");
  para.innerHTML = nimi1; // InnerHTML muudab elemendi sisu
}

function onClick4() {
  var para = document.getElementById("span1");
  para.innerHTML = nimi2; // InnerHTML muudab elemendi sisu
}

function onClick5() {
  nimi1 = "Juku";
}

var text3 = "";
var text4 = null; // Ei oma mingit tüüpi
