(function(){
'use strict'; //厳密なエラーチェックができるように。推奨されている

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var result = document.getElementById('result');
var startTime;
var isStarted = false; //最初はゲームは始まっていないのでfalse.

start.addEventListener('click', function(){
  if (isStarted === true){ //startを何回押しても、最初のクリックからカウントするように(これを書かない場合、最近クリックされたところから始まる)
    return;
  }
  isStarted = true;
  startTime = Date.now();
  this.className = 'pushed';
  stop.className = ''; // startを押した時にstopのclassnameをなしにする。(元に戻す)
  result.textContent = '0.000';
  result.className = 'standby';
});

stop.addEventListener('click', function(){
var elapsedTime; //経過時間
var diff;
if (isStarted === false){ //最初にstopを押しても何も起こらないように
  return;
}

isStarted = false;
elapsedTime = (Date.now() - startTime) / 1000;
// 現在時刻からスタート時間を引く。
// 秒で表示するため、()で囲って1000でわる。
result.textContent = elapsedTime.toFixed(3);
this.className = 'pushed';
start.className = '';
result.className = '';

//toFixed小数点以下３桁表示
diff = elapsedTime - 5.0;
//  下と同じ意味  if (diff > -1.0 && diff < 1.0)
if (Math.abs(diff) < 1.0 ) {
result.className = 'perfect';
// クラスの与え方
  }

});
})();
