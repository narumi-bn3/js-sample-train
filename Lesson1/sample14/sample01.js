//関数についての学習
//関数とは、処理をひとまとまりにし呼び出すための構文です。

//function 関数名(引数１,引数２, ... etc) {
// 処理   
// return 戻り値
// }

//　コンソールに出力する関数の作成　outputConsole
//関数の定義
function outputConsole () {
    console.log("コンソールに出力")
}
//関数の呼び出し
outputConsole()

//引数をもらう関数の作成

//天気を引数で取得して傘が必要かどうかを判定する関数
function checkUmbrella(weather) {
    if(weather === "晴れ" ) {
        console.log("日傘が必要")
    } else if(weather === "雨"){
        console.log("雨傘が必要")
    }else{
        console.log("傘は不要")
    }
}

checkUmbrella("晴れ")

//関数の戻り値についての勉強
function addNumber(a,b) {
    return a + b
}

console.log(addNumber(10,1))

const answer = addNumber(1,1)
console.log(answer)

//　コールバック関数:関数を受け取り関数内で呼び出します。
function callbackFunction(log) {
    const a = 9 + 1
    log(a)
}

callbackFunction(console.log)

//　クロージャー：関数を返す
function makeFunc() {
    let name = `Mozilla`;

    function displayName() {
        alert(name);
    }

    return displayName;
}

let fn = makeFunc()
fn()

//　変数のスコープについて
let a = 10

function test() {
    let p = 100
    console.log(p)
}

// console.log(p)

// 関数宣言と関数式



// ２つの変数をコンソールに出力する関数： outputTwo
function outputTwo(a,b) {
    console.log(a,b)
}
outputTwo("23","32")


//１つの変数を３倍にしてコンソールに出力する関数: outputThreefold
function outputThreefold(c) {
    console.log(c * 3)
}
outputThreefold(6)
//３つの引数を受け取り　a * b / c の結果を返す関数：triangleArea を作成しコンソールに出力して下さい。
function triangleArea(a,b,c) {
    return (a * b / c);
}

console.log(triangleArea(2,3,2))

// Hell World. を１０行コンソールに表示する関数　hello10
function hello10() {
    for(let i = 0; i < 10; i++){
        console.log("Hello World.")
    }
}

//　引数の値を１/4にする関数を作成　div4
function div4(d){
    return d / 4
}

// 引数の値が偶数の時コンソールに「偶数です」奇数の時に「奇数です」と表示する関数 evenorodd
function evenorodd(e){
    let f = e % 2
    if(f === 0){
        console.log("偶数です")
    }else{
        console.log("奇数です")
    }
}
evenorodd(3)