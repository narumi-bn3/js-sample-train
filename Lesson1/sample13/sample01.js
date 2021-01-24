//配列の練習

//配列とは複数の値を変数として扱うことができるデータ構造です。
const myFruitsArray =["りんご","みかん","すいか"]
console.log(myFruitsArray)

//スイカを出力
console.log(myFruitsArray[2])

//曜日の出力練習
const weeks = ["日","月","火","水","木","金","土"]
console.log("今日の曜日は" + weeks[0] + "曜日です")

console.log(weeks.length)
for (let i = 0; i < weeks.length; i++){
    console.log("今日の曜日は" + weeks[i] + "曜日です")
}

//配列のプロパティーについての勉強
//データには、プリミティブ型とユーザー定義型が存在します。
//プリミティブ型には、既に言語で定義されているオブジェクトです。(int,float,double,string...)
//ユーザ定義型についてはあとで勉強。

weeks.forEach(function(item,index){
    //処理書きます。
    console.log(index)
    console.log("今日の曜日は"　+ item + "曜日です")
})


//　配列の要素の追加
weeks.unshift("TEST")
// 先頭に要素が追加されます。
console.log(weeks)

weeks.push("TEST")
// 末尾に要素が追加されます
console.log(weeks)

// 配列の要素の削除
weeks.shift()
console.log(weeks)

weeks.pop()
console.log(weeks)


//　配列の任意の位置で項目を削除する場合
weeks.splice(0, 2)
console.log(weeks)

weeks.splice(3, 0, "add")
console.log(weeks)

//　配列の順序を逆順にする
weeks.reverse()
console.log(weeks)

//　配列の並び替え（文字コードに依存）
weeks.sort()
console.log(weeks)
