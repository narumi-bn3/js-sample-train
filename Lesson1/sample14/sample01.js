//関数についての学習
//関数とは、処理をひとまとまりにし呼び出すための構文です。

//function 関数名() {
// 処理   
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

console.log(p)

// 関数宣言と関数式

console fn = function () {
    
}
