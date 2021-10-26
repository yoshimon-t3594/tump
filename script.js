'use strict';

// トランプ52枚を作成
let Trump = [];
let i = 1;
while (i <= 52) {
  Trump.push(i);
  i++;
}
console.log(Trump);


// 数字を配列から取り出す
let a = 52;
let kazu = 0;
let num = 0;
document.getElementById('btn').onclick = function () {
  // console.log('a', a);
  kazu = Math.floor(Math.random() * a);
  num = Trump[kazu];
  Trump.splice(kazu, 1);
  a--;
  // console.log('取り出したnum', num);
  // console.log(Trump);
  // console.log('a', a);

  // スートの決定
  let txt;
  if (num <= 13) {
    txt = 'スペード';
  } else if (14 <= num && num < 27) {
    txt = 'クローバー';
  } else if (27 <= num && num < 40) {
    txt = 'ダイヤ';
  } else if (40 <= num) {
    txt = 'ハート';
  }

  // 数字の決定
  num = num % 13;
  // 割り切れた時は最大数の13となる
  if (num === 0) {
    num = 13;
  }
  console.log(`スートは${txt}、数字は${num}です。`);
};