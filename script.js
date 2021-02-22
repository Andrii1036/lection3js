console.log('------------------завдання 1-----------------------');
// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//////////////////////////////////////////////////////////////////////////////////////////////////
// let a1 = { key1: 'asdfr', key2: 'iuhiuh', key3: 'qwerty' };
// let a2 = { key4: 'qawsedrf', key5: 123, key6: 'zasxcdf' };
// let a3 = { key7: true, key8: 12345, key9: 'asdfrewq' };
// let a4 = { key10: 'liuhjkl', key11: 'mnbvc', key12: false };
// let a5 = { key13: true, key14: 789, key15: 'hfhfhfhf'};
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// ..................................................................................................
console.log('------------------завдання 2-----------------------');
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать
// массив и внутренний объект. Опишите что угодно, машину, картину, болт... 
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//////////////////////////////////////////////////////////////////////////////////////////////////////
// let a6 = { key1: 'asdfr', key2: 'iuhiuh', key3: [{ key31: 'hjgfjhg' }] };
// let a7 = { key4: 'qawsedrf', key5: ['asasas','fdfdfd'], key6: 'zasxcdf' };
// let a8 = { key7: true, key8: 12345, key9: 'asdfrewq' };
// let a9 = { key10: [{ key101: 'hfjdfjkk', key102: 2345 }], key11: 'mnbvc', key12: false };
// let a10 = { key13: true, key14: [{ key141: 'njnjnjnj' }, { key1421: true }], key15: 'hfhfhfhf' };
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// .....................................................................................................
console.log('------------------завдання 3-----------------------');
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
///////////////////////////////////////////////////////////////////////////////////////////////////
// let a1 = { key1: 'asdfr', key2: 'iuhiuh', key3: 'qwerty' };
// let a2 = { key4: 'qawsedrf', key5: 123, key6: 'zasxcdf' };
// let a3 = { key7: true, key8: 12345, key9: 'asdfrewq' };
// let a4 = { key10: 'liuhjkl', key11: 'mnbvc', key12: false };
// let a5 = { key13: true, key14: 789, key15: 'hfhfhfhf' };
// let a6 = { key61: 'asdfr', key62: 'iuhiuh', key63: [{ key631: 'hjgfjhg' }] };
// let a7 = { key74: 'qawsedrf', key75: ['asasas', 'fdfdfd'], key76: 'zasxcdf' };
// let a8 = { key87: true, key88: 12345, key89: 'asdfrewq' };
// let a9 = { key910: [{ key9101: 'hfjdfjkk', key9102: 2345 }], key911: 'mnbvc', key912: false };
// let a10 = { key1013: true, key1014: [{ key10141: 'njnjnjnj' }, { key101421: true }], key1015: 'hfhfhfhf' };
// for (let keys in a1){
// console.log(keys);
// }
// for (let keys in a2){
//     console.log(keys);
// }
// for (let keys in a3){
//     console.log(keys);
// }
// for (let keys in a4){
//     console.log(keys);
// }
// for (let keys in a5){
//     console.log(keys);
// }
// for (let keys in a6){
//     console.log(keys);
// }
// for (let keys in a7){
//     console.log(keys);
// }
// for (let keys in a8){
//     console.log(keys);
// }
// for (let keys in a9){
//     console.log(keys);
// }
// for (let keys in a10){
//     console.log(keys);
// }
// ...................................................................................................
console.log('------------------завдання 4-----------------------');
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
/////////////////////////////////////////////////////////////////////////////////////////////////
// let a1 = { key1: 'asdfr', key2: 'iuhiuh', key3: 'qwerty' };
// let a2 = { key4: 'qawsedrf', key5: 123, key6: 'zasxcdf' };
// let a3 = { key7: true, key8: 12345, key9: 'asdfrewq' };
// let a4 = { key10: 'liuhjkl', key11: 'mnbvc', key12: false };
// let a5 = { key13: true, key14: 789, key15: 'hfhfhfhf' };
// let a6 = { key61: 'asdfr', key62: 'iuhiuh', key63: [{ key631: 'hjgfjhg' }] };
// let a7 = { key74: 'qawsedrf', key75: ['asasas', 'fdfdfd'], key76: 'zasxcdf' };
// let a8 = { key87: true, key88: 12345, key89: 'asdfrewq' };
// let a9 = { key910: [{ key9101: 'hfjdfjkk', key9102: 2345 }], key911: 'mnbvc', key912: false };
// let a10 = { key1013: true, key1014: [{ key10141: 'njnjnjnj' }, { key101421: true }], key1015: 'hfhfhfhf' };
// console.log(Object.keys(a1));
// console.log(Object.keys(a2));
// console.log(Object.keys(a3));
// console.log(Object.keys(a4));
// console.log(Object.keys(a5));
// console.log(Object.keys(a6));
// console.log(Object.keys(a7));
// console.log(Object.keys(a8));
// console.log(Object.keys(a9));
// console.log(Object.keys(a10));
// ....................................................................................................
console.log('------------------завдання 5-----------------------');
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, 
// мощность, цвет. (Значаения полей могу быть выдуманными)
///////////////////////////////////////////////////////////////////////////////////////////////////
// let cars = [
//     {model: 'rx1', year:1991, power:350, color:'blue'},
//     {model: 'rx2', year:1989, power:300, color:'yellow'},
//     {model: 'rx3', year:1995, power:450, color:'green'},
//     {model: 'rx4', year:1988, power:441, color:'black'},
//     {model: 'rx5', year:1976, power:378, color:'white'},
//     {model: 'rx6', year:1998, power:490, color:'purple'},
//     {model: 'rx7', year:2001, power:622, color:'broun'},
//     {model: 'rx8', year:2013, power:415, color:'red'},
//     {model: 'rx9', year:1999, power:380, color:'orange'},
//     {model: 'rx032', year:2021, power:500, color:'pink'}
// ];
// console.log(cars);
// ......................................................................................................
console.log('------------------завдання 6-----------------------');
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, 
// регион. (Значаения полей могу быть выдуманными)
///////////////////////////////////////////////////////////////////////////////////////////////////
// let cities = [
//     {name: 'Lviv', population: 1000000, country:'Ukraine', mainland:'Eurasia'},
//     {name: 'Kyiv', population: 5000000, country:'Ukraine', mainland:'Eurasia'},
//     {name: 'New York', population: 9000000, country:'The USA', mainland:'North America'},
//     {name: 'Ottawa', population: 995000, country:'Canada', mainland:'North America'},
//     {name: 'Canberra', population: 400000, country:'Australia', mainland:'Australia'},
// ];
// console.log(cities);
// document.write(cities[0].country);
// ...............................................................................................
console.log('------------------завдання 7-----------------------');
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, 
// цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
/////////////////////////////////////////////////////////////////////////////////////////////////
// let cars2 = [
//     { model: 'rx1', year: 1991, power: 350, color: 'blue', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx2', year: 1989, power: 300, color: 'yellow', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx3', year: 1995, power: 450, color: 'green', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx4', year: 1988, power: 441, color: 'black', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx5', year: 1976, power: 378, color: 'white', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx6', year: 1998, power: 490, color: 'purple', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx7', year: 2001, power: 622, color: 'broun', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx8', year: 2013, power: 415, color: 'red', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx9', year: 1999, power: 380, color: 'orange', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx032', year: 2021, power: 500, color: 'pink', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } }
// ];
// console.log(cars2);
// .............................................................................................
console.log('------------------завдання 8-----------------------');
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
/////////////////////////////////////////////////////////////////////////////////////////////////////
// let cars = [
//     { model: 'rx1', year: 1991, power: 350, color: 'blue' },
//     { model: 'rx2', year: 1989, power: 300, color: 'yellow' },
//     { model: 'rx3', year: 1995, power: 450, color: 'green' },
//     { model: 'rx4', year: 1988, power: 441, color: 'black' },
//     { model: 'rx5', year: 1976, power: 378, color: 'white' },
//     { model: 'rx6', year: 1998, power: 490, color: 'purple' },
//     { model: 'rx7', year: 2001, power: 622, color: 'broun' },
//     { model: 'rx8', year: 2013, power: 415, color: 'red' },
//     { model: 'rx9', year: 1999, power: 380, color: 'orange' },
//     { model: 'rx032', year: 2021, power: 500, color: 'pink' }
// ];
// let cities = [
//     { name: 'Lviv', population: 1000000, country: 'Ukraine', mainland: 'Eurasia' },
//     { name: 'Kyiv', population: 5000000, country: 'Ukraine', mainland: 'Eurasia' },
//     { name: 'New York', population: 9000000, country: 'The USA', mainland: 'North America' },
//     { name: 'Ottawa', population: 995000, country: 'Canada', mainland: 'North America' },
//     { name: 'Canberra', population: 400000, country: 'Australia', mainland: 'Australia' },
// ];
// let cars2 = [
//     { model: 'rx1', year: 1991, power: 350, color: 'blue', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx2', year: 1989, power: 300, color: 'yellow', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx3', year: 1995, power: 450, color: 'green', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx4', year: 1988, power: 441, color: 'black', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx5', year: 1976, power: 378, color: 'white', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx6', year: 1998, power: 490, color: 'purple', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx7', year: 2001, power: 622, color: 'broun', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx8', year: 2013, power: 415, color: 'red', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx9', year: 1999, power: 380, color: 'orange', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx032', year: 2021, power: 500, color: 'pink', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } }
// ];
// let i = 0;
// let y = 0;
// let z = 0;
// while(i<cars.length){
//     console.log(cars[i]);
//     i++;
// };
// while(y<cities.length){
//     console.log(cities[y]);
//     y++;
// };
// while(z<cars2.length){
//     console.log(cars2[z]);
//     z++;
// };
// ...................................................................................................
console.log('------------------завдання 9-----------------------');
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
///////////////////////////////////////////////////////////////////////////////////////////////
// let cars = [
//     { model: 'rx1', year: 1991, power: 350, color: 'blue' },
//     { model: 'rx2', year: 1989, power: 300, color: 'yellow' },
//     { model: 'rx3', year: 1995, power: 450, color: 'green' },
//     { model: 'rx4', year: 1988, power: 441, color: 'black' },
//     { model: 'rx5', year: 1976, power: 378, color: 'white' },
//     { model: 'rx6', year: 1998, power: 490, color: 'purple' },
//     { model: 'rx7', year: 2001, power: 622, color: 'broun' },
//     { model: 'rx8', year: 2013, power: 415, color: 'red' },
//     { model: 'rx9', year: 1999, power: 380, color: 'orange' },
//     { model: 'rx032', year: 2021, power: 500, color: 'pink' }
// ];
// let cities = [
//     { name: 'Lviv', population: 1000000, country: 'Ukraine', mainland: 'Eurasia' },
//     { name: 'Kyiv', population: 5000000, country: 'Ukraine', mainland: 'Eurasia' },
//     { name: 'New York', population: 9000000, country: 'The USA', mainland: 'North America' },
//     { name: 'Ottawa', population: 995000, country: 'Canada', mainland: 'North America' },
//     { name: 'Canberra', population: 400000, country: 'Australia', mainland: 'Australia' },
// ];
// let cars2 = [
//     { model: 'rx1', year: 1991, power: 350, color: 'blue', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx2', year: 1989, power: 300, color: 'yellow', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx3', year: 1995, power: 450, color: 'green', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx4', year: 1988, power: 441, color: 'black', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx5', year: 1976, power: 378, color: 'white', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx6', year: 1998, power: 490, color: 'purple', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx7', year: 2001, power: 622, color: 'broun', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx8', year: 2013, power: 415, color: 'red', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx9', year: 1999, power: 380, color: 'orange', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx032', year: 2021, power: 500, color: 'pink', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } }
// ];
// for(i = 0; i<cars.length; i++){
//     console.log(cars[i]);
// };
// for(i = 0; i<cities.length; i++){
//     console.log(cities[i]);
// };
// for(i = 0; i<cars2.length; i++){
//     console.log(cars2[i]);
// };
// ......................................................................................................
console.log('------------------завдання 10-----------------------');
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
/////////////////////////////////////////////////////////////////////////////////////////////////
// let cars = [
//     { model: 'rx1', year: 1991, power: 350, color: 'blue' },
//     { model: 'rx2', year: 1989, power: 300, color: 'yellow' },
//     { model: 'rx3', year: 1995, power: 450, color: 'green' },
//     { model: 'rx4', year: 1988, power: 441, color: 'black' },
//     { model: 'rx5', year: 1976, power: 378, color: 'white' },
//     { model: 'rx6', year: 1998, power: 490, color: 'purple' },
//     { model: 'rx7', year: 2001, power: 622, color: 'broun' },
//     { model: 'rx8', year: 2013, power: 415, color: 'red' },
//     { model: 'rx9', year: 1999, power: 380, color: 'orange' },
//     { model: 'rx032', year: 2021, power: 500, color: 'pink' }
// ];
// let cities = [
//     { name: 'Lviv', population: 1000000, country: 'Ukraine', mainland: 'Eurasia' },
//     { name: 'Kyiv', population: 5000000, country: 'Ukraine', mainland: 'Eurasia' },
//     { name: 'New York', population: 9000000, country: 'The USA', mainland: 'North America' },
//     { name: 'Ottawa', population: 995000, country: 'Canada', mainland: 'North America' },
//     { name: 'Canberra', population: 400000, country: 'Australia', mainland: 'Australia' },
// ];
// let cars2 = [
//     { model: 'rx1', year: 1991, power: 350, color: 'blue', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx2', year: 1989, power: 300, color: 'yellow', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx3', year: 1995, power: 450, color: 'green', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx4', year: 1988, power: 441, color: 'black', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx5', year: 1976, power: 378, color: 'white', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx6', year: 1998, power: 490, color: 'purple', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx7', year: 2001, power: 622, color: 'broun', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx8', year: 2013, power: 415, color: 'red', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx9', year: 1999, power: 380, color: 'orange', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//     { model: 'rx032', year: 2021, power: 500, color: 'pink', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } }
// ];
// for(let key of cars){
//     console.log(key);
// };
// for(let key of cities){
//     console.log(key);
// };
// for(let key of cars2){
//     console.log(key);
// };
// .....................................................................................................
console.log('------------------завдання 11-----------------------');
// - взять объекты из задания 1 и превратить каждый в json.
///////////////////////////////////////////////////////////////////////////////////////////////
// let a1 = { key1: 'asdfr', key2: 'iuhiuh', key3: 'qwerty' };
// let a2 = { key4: 'qawsedrf', key5: 123, key6: 'zasxcdf' };
// let a3 = { key7: true, key8: 12345, key9: 'asdfrewq' };
// let a4 = { key10: 'liuhjkl', key11: 'mnbvc', key12: false };
// let a5 = { key13: true, key14: 789, key15: 'hfhfhfhf'};
// let jsona1 = JSON.stringify(a1);
// let jsona2 = JSON.stringify(a2);
// let jsona3 = JSON.stringify(a3);
// let jsona4 = JSON.stringify(a4);
// let jsona5 = JSON.stringify(a5);
// document.write(jsona1+'<br>',jsona2+'<br>',jsona3+'<br>',jsona4+'<br>',jsona5+'<br>',);
// .................................................................................................
console.log('------------------завдання 12-----------------------');
// - взять json из задания 11 и превратить их обратно в объекты.
/////////////////////////////////////////////////////////////////////////////////////////////////
// let a1 = { key1: 'asdfr', key2: 'iuhiuh', key3: 'qwerty' };
// let a2 = { key4: 'qawsedrf', key5: 123, key6: 'zasxcdf' };
// let a3 = { key7: true, key8: 12345, key9: 'asdfrewq' };
// let a4 = { key10: 'liuhjkl', key11: 'mnbvc', key12: false };
// let a5 = { key13: true, key14: 789, key15: 'hfhfhfhf'};
// let jsona1 = JSON.stringify(a1);
// let jsona2 = JSON.stringify(a2);
// let jsona3 = JSON.stringify(a3);
// let jsona4 = JSON.stringify(a4);
// let jsona5 = JSON.stringify(a5);
// let a11 = JSON.parse(jsona1);
// let a22 = JSON.parse(jsona2);
// let a33 = JSON.parse(jsona3);
// let a44 = JSON.parse(jsona4);
// let a55 = JSON.parse(jsona5);
// console.log(jsona1);
// console.log(a11);
// ..................................................................................................
console.log('------------------завдання 13-----------------------');
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
////////////////////////////////////////////////////////////////////////////////////////////
// let cars = [
//         {model: 'rx1', year:1991, power:350, color:'blue'},
//         {model: 'rx2', year:1989, power:300, color:'yellow'},
//         {model: 'rx3', year:1995, power:450, color:'green'},
//         {model: 'rx4', year:1988, power:441, color:'black'},
//         {model: 'rx5', year:1976, power:378, color:'white'},
//         {model: 'rx6', year:1998, power:490, color:'purple'},
//         {model: 'rx7', year:2001, power:622, color:'broun'},
//         {model: 'rx8', year:2013, power:415, color:'red'},
//         {model: 'rx9', year:1999, power:380, color:'orange'},
//         {model: 'rx032', year:2021, power:500, color:'pink'}
//     ];
// for(i = 0; i < cars.length; i++){
//     cars[i] = JSON.stringify(cars[i]);
// };
// console.log(cars);
// ...................................................................................................
console.log('------------------завдання 14-----------------------');
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
//////////////////////////////////////////////////////////////////////////////////////////////////
// let cities = [
//         {name: 'Lviv', population: 1000000, country:'Ukraine', mainland:'Eurasia'},
//         {name: 'Kyiv', population: 5000000, country:'Ukraine', mainland:'Eurasia'},
//         {name: 'New York', population: 9000000, country:'The USA', mainland:'North America'},
//         {name: 'Ottawa', population: 995000, country:'Canada', mainland:'North America'},
//         {name: 'Canberra', population: 400000, country:'Australia', mainland:'Australia'},
//     ];
// for(i = 0; i < cities.length; i++){
//     let elmJson = JSON.stringify(cities[i]);
//     console.log(elmJson);
// };

// ...............................................................................................
console.log('------------------завдання 15-----------------------');
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать 
// в новый массив.
//////////////////////////////////////////////////////////////////////////////////////////////////////
// let cars2 = [
//         { model: 'rx1', year: 1991, power: 350, color: 'blue', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//         { model: 'rx2', year: 1989, power: 300, color: 'yellow', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//         { model: 'rx3', year: 1995, power: 450, color: 'green', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//         { model: 'rx4', year: 1988, power: 441, color: 'black', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//         { model: 'rx5', year: 1976, power: 378, color: 'white', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//         { model: 'rx6', year: 1998, power: 490, color: 'purple', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//         { model: 'rx7', year: 2001, power: 622, color: 'broun', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//         { model: 'rx8', year: 2013, power: 415, color: 'red', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//         { model: 'rx9', year: 1999, power: 380, color: 'orange', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } },
//         { model: 'rx032', year: 2021, power: 500, color: 'pink', driver: { name: 'Andrii', age: 30, sex: 'male', expirience: 12 } }
//     ];
// let cars2Copy = [];
// for(i = 0; i < cars2.length; i++){
//     cars2Copy[i] = JSON.stringify(cars2[i]);
// };
// console.log(cars2);
// console.log(cars2Copy);
// ..................................................................................................
console.log('------------------завдання 16-----------------------');
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills 
// которое является массивом. Проитерировать массив пользователей и в каждом пользователе 
// проитерировать его массив skills
//////////////////////////////////////////////////////////////////////////////////////////////////////
// let users = [
//     {name:'Andrii', age:30, skills:['HTMl', 'CSS', 'JS']},
//     {name:'Oleh', age:33, skills:['HTMl', 'CSS', 'JS', 'Java']},
//     {name:'Anton', age:29, skills:['HTMl', 'CSS', 'JS', 'Java', 'C++']}
// ];
// for(let user of users){
//     console.log(user)
//     for(let skill of user.skills){
//         console.log(skill)
//     }
// }
// ................................................................................................
console.log('------------------завдання 17-----------------------');
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills 
// которое является массивом. Проитерировать массив пользователей и в каждом пользователе 
// проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//////////////////////////////////////////////////////////////////////////////////////////////
// let users = [
//         {name:'Andrii', age:30, skills:['HTMl', 'CSS', 'JS']},
//         {name:'Oleh', age:33, skills:['HTMl', 'CSS', 'JS', 'Java']},
//         {name:'Anton', age:29, skills:['HTMl', 'CSS', 'JS', 'Java', 'C++']}
//     ]
// let usersSkills = [];
// for(let user of users){
//     console.log(user)
//     for(let skill of user.skills){
//         console.log(skill)
//         usersSkills.push(skill);
//     }
// }
// console.log(usersSkills)
// ..............................................................................................
console.log('------------------завдання 18-----------------------');
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [
// {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
/////////////////////////////////////////////////////////////////////////////////////////////////////
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
// for(let user of users){
//     console.log(user)
//     for(let arr of user.skills){
//         console.log(arr)
//     }
// }
// .....................................................................................
console.log('------------------завдання 19-----------------------');
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) 
// їх в інший порожній масив.
///////////////////////////////////////////////////////////////////////////////////////////////////
// let users = [
//     {
//         name: 'vasya', 
//         age: 31, 
//         status: false,
//         address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
//     }, {
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
//     }, {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
//     }, {
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
//     }, {
//         name: 'max',
//         age: 30,
//         status: true,
//         address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
//     }, {
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
//     }, {
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
//     }, {
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
//     }, {
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
//     }, {
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
//     }, {
//         name: 'max',
//         age: 31,
//         status: true,
//         address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
//     }
// ];
// let usersAddress = [];
// for(let user of users){
//     usersAddress.push(user.address);
// }
// console.log(usersAddress);
// .........................................................................................
