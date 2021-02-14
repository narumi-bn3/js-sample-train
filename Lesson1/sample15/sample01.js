// Date オブジェクトのインスタンス化
let myDate = new Date();

// メソッドを使用して日付の文字列を出力する
let str = myDate.getFullYear()

//表示
console.log(str)

console.log(myDate.getDate())

console.log(myDate.getMilliseconds())



console.log(myDate.getHours() + ":" + myDate.getMinutes()  + ":" + myDate.getSeconds());

// getDay()が０〜６の数値で曜日を表す為、これを利用して漢字で曜日を出力する
let dayNames = ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"];

console.log(dayNames[myDate.getDay()]);

// Dateオブジェクトを特定の日付で初期化しよう！
let newYearDate = new Date(2021,0,1); //2021/01/01の日付を作成

// YYYY/MM/DDをコンソールに表示
console.log(newYearDate.getFullYear() + "/" + (newYearDate.getMonth() +1) + "/" + newYearDate.getDate());

// 2021年２月２日(曜日を漢字で出力)をコンソールに表示
newYearDate = new Date(2021,1,2);
console.log(newYearDate.getFullYear() + "年"　+ (newYearDate.getMonth() + 1) + "月" + newYearDate.getDate() + "日 (" + dayNames[newYearDate.getDay()] + ")");

// Dateオブジェクトを受け取りコンソール上に　HH:MM:SS　を表示する関数の作成（関数宣言で）
function timelog(date){
    console.log(date.getHours() + ":" + date.getMinutes()  + ":" + date.getSeconds())
}
timelog(myDate);

// Dateオブジェクトを受け取りコンソール上にYYYY年MM月DD日（曜日を漢字で出力）を表示する関数の作成（関数式で）
const timeslog = function(date){
    console.log(date.getFullYear() + "年"　+ (date.getMonth() + 1) + "月" + date.getDate() + "日 (" + dayNames[date.getDay()] + ")");
}
timeslog(myDate);
timeslog(newYearDate);