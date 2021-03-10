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
// const weather = ["晴れ","曇り","雨"];
//配列を追加
// weather.push("雪");
// index0から
// document.getElementById("test").textContent = "今日の天気は" + weather[3];


// const weather = ["晴れ","曇り","雨","雪"]
// //lengthで配列の中身の回数分繰り返すfor文
// for (let i = 0; i < weather.length; i++) {
//   //createElementでタグの要素を指定
//   let li = document.createElement("li");
//   li.textContent = weather[i];
//   //子要素を追加
//   document.getElementById("number").appendChild(li);
// }

// document.getElementById("test").addEventListener("click", function() {
//   // toggleでtest2というクラスをつけたり外したりできる
//   this.classList.toggle("test2");
//   // querySelectorAll
//   // 指定したセレクタに一致する最初のHTML要素(Element)を取得する
//   const listElements = document.querySelectorAll(".list li");
//   for (let i = 0; i < listElements.length; i++) {
//     //liにクラスをつけたり外したり
//     listElements[i].classList.toggle("test");
//   }
// });

//0~1未満の数値をランダムに生成
// const randomNumber = Math.random();
// document.getElementById("test").textContent = Math.floor(randomNumber);

//おみくじ
// const omikuji = ["大吉","吉","凶"];
// const omikujiRandomNumber = Math.floor(Math.random() * omikuji.length)
// document.getElementById("omikuji").textContent = omikuji[omikujiRandomNumber];

const score = Math.floor(Math.random() * 20);
document.getElementById("score").textContent = score;
const Answer = document.getElementById("test")
if(score === 20){
  Answer.textContent = "scoreは20です。"
} else if(score === 10) {
  Answer.textContent = "scoreは10です。"
}else if(score === 50) {
  Answer.textContent = "scoreは50です。"
}else{
  Answer.textContent = "scoreは20ではないです。"
}


