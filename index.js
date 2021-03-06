// console.log("test");
// 出力

// alert("test");
//アラートメッセージを表示する

let x = 2;
//書き換え可能
x = 20;
let y = 3;
console.log(x + y);

//HTMLのIDを取得する textContentでタグの中を表示
document.getElementById("test").textContent = "test";

//定数に値を入れる
const tax = 1.1;
const applePrice = 120;
const orangePrice = 150;
document.getElementById("apple").textContent = applePrice * tax;
document.getElementById("orange").textContent = orangePrice * tax;


