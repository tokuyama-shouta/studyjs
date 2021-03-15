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

// const score = Math.floor(Math.random() * 20);
// document.getElementById("score").textContent = score;
// const Answer = document.getElementById("test")
// if(score === 20){
//   Answer.textContent = "scoreは20です。"
// } else if(score === 10) {
//   Answer.textContent = "scoreは10です。"
// }else if(score === 50) {
//   Answer.textContent = "scoreは50です。"
// }else{
//   Answer.textContent = "scoreは20ではないです。"
// }

// const a = 2, b = 3;

// if(a > 1) {
//   console.log(a > 1);
// }

// const weathers = ["晴","雲","雨","雪","雷"]
//   randomNumber = Math.floor(Math.random() * weathers.length),

//   randomWeather = weathers[randomNumber];

// document.getElementById("weather").textContent = "今日の天気は" + randomWeather + "です。";

// const otenki = document.getElementById("weathersMessage");
// if(randomWeather === "晴"){
//   otenki.textContent = "今日は晴れです。";
// } else if (randomWeather === "雲") {
//   otenki.textContent = "今日はクモりです。";
// } else if (randomWeather === "雨") {
//   otenki.textContent = "雨やん";
// } else if (randomWeather === "雪") {
//   otenki.textContent = "雪降ってる";
// }



// switch (randomWeather) {
//   case "晴":
//     otenki.textContent = "今日は晴れです。";
//     break;
//   case "雲":
//     otenki.textContent = "今日はクモりです。";
//     break;
//   case "雨":
//     otenki.textContent = "雨やん";
//     break;
//   case "雪":
//     otenki.textContent = "雪降ってる";
//     break;
//   default:
//     otenki.textContent = "今日の天気ヤバイ";
// }


// const tax = 1.1;
// function insertText(itemPrice,element) {
//   function calculation(price) {
//     return Math.floor(price * tax);
    
//   }
//   document.getElementById(element).textContent = itemPrice + "円の商品の税込み価格は" + calculation(itemPrice) + "円です。";

// }
// insertText(100,"result");
// insertText(200,"result2");
// insertText(300,"result3");

const item = {
  //左がkey 右がvalue
  name: "パソコン",
  price: 100000,
  sale: true,
  parts: ["CPU","メモリ","HDD"],
  a:{
    b:"テスト"
  }
}
//呼び出すitemの中のname or price item.name or item.price
document.getElementById("name").textContent = "商品名は" + item.name;
document.getElementById("price").textContent = "値段は" + item.price + "円です。";

item

if (item["sale"]){
  document.getElementById("sale").textContent = "値段は" + item.name + "はセール中です。";

}

let text = '';
for (let i = 0; i < item.parts.length; i++){
  text += item.parts[i];
  if(i !== item.parts.length - 1){
    text += "・";
  }
}
document.getElementById("parts").textContent = item.name + "のパーツは" + text + "です。";
document.getElementById("test").textContent = item["a"]["b"];
