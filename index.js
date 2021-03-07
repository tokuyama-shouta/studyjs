// console.log("test");
// 出力

// alert("test");
//アラートメッセージを表示する

// let x = 2;
//書き換え可能
// x = 20;
// let y = 3;
// console.log(x + y);

//HTMLのIDを取得する textContentでタグの中を表示
// document.getElementById("test").textContent = "test";

//定数に値を入れる
// const tax = 1.1;
// const applePrice = 120;
// const orangePrice = 150;
// document.getElementById("apple").textContent = applePrice * tax;
// document.getElementById("orange").textContent = orangePrice * tax;


//取得したIDをクリックするとイベントを起こす処理
// document.getElementById("test").addEventListener('click', function() {
  //thisは↑の事をさす
//   this.textContent = 'クリックされた。'
// });


//配列
const weather = ["晴れ","曇り","雨"];
//配列を追加
weather.push("雪");
// index0から
document.getElementById("test").textContent = "今日の天気は" + weather[3];

