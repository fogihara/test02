//console.log("hello mw!a");

// 複数条件

let x = 'def'; 

if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
console.log(x);
}

// if true ... elseの省略形

let y = 101; 

if (y > 100) {
  test = true;
} else {
  test = false;
}
console.log(test);

let z = 11; 

let test2 = (z > 10) ? 'ABC' : 'DEF';
console.log(test2);

let test3 = z > 10;
console.log(test3);  // z が10以上の場合は test3 に True

//変数宣言
//Longhand
let test4;
let test5 = 1;
//Shorthand
let test6, test7 = 1;


//4. null／未定義／空の判定
let test1 = null; 
let test8 = 'Default';
// Longhand
if (test1 !== null || test1 !== undefined || test1 !== '') {
   test8 = test1;
}
console.log("test8 = "+test8);
// Shorthand
let test9 = test1 || '';
console.log("test9 = "+test9);


//代入演算子の省略形
// Longhand
test1 = test1 + 1;
test2 = test2 - 1;
test3 = test3 * 20;

// Shorthand
test1++;
test2--;
test3 *= 20;
console.log("test3 = "+test3);  // 初期値が20であれば 20* 20 = 400、設定していない場合 20

// 11. foreachループ

// Longhand
for (var i = 0; i < testData.length; i++)

// Shorthand
for (let i in testData) or for (let i of testData)



15. switchの省略形
key-valueオブジェクトに条件を保存し、その条件に基づいて使用します。


// switchの省略形
// Longhand
switch (data) {
   case 1:
      test1();
   break;
   case 2:
      test2();
   break;
   case 3:
      test();
   break;
   // And so on...
}

// Shorthand
var data = {
   1: test1,
   2: test2,
   3: test
};
data[something] && data[something]();


//18. パラメータのデフォルト値

//Longhand
function add(test1, test2) {
   if (test1 === undefined)
      test1 = 1;
   if (test2 === undefined)
      test2 = 2;
   return test1 + test2;
}

//shorthand
add = (test1 = 1, test2 = 2) => (test1 + test2);

add() //output: 3


//22. オブジェクトプロパティの割り当て
let test21 = 'a';
let test22 = 'b';

//Longhand
let obj = {test21: test21, test22: test22};

//Shorthand
let obj = {test21, test22};

//23. 文字列の数値への変換

//Longhand
let test11 = parseInt('123');
let test2 = parseFloat('12.3');

//Shorthand
let test11 = +'123';
let test12 = +'12.3';

//------------------------

let val1;
let val2;
let val3;
let val4;
let val5;
val1 = 10&3; // 3
val1 = 10&3; // 3
val2 = 0;
val2 += 5;  //6
val3 = 0;   
val3 ++;    //1
val4 = 0;
val4 --;    //-1
val5 = "It\'s a SONY\nIt\'s a \tCanon" + '12345'



//console.log(val1);
//console.log(val2);
//console.log(val3);
//console.log(val4);
//console.log(val5);

