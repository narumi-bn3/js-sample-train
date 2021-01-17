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