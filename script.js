let seconds = 0
let timer
const display = document.getElementById('display')
const startStopButton = document.getElementById('start-stop')
const resetButton = document.getElementById('reset')
const addSecond = () => {
  // 秒数を1追加
  ++seconds
  // 秒数をディスプレイに反映
  display.innerText = seconds
}

// ***** 以下を追加 *****
// 「スタート」「ストップ」ボタンがクリックされたとき
startStopButton.onclick = () => {
  if (startStopButton.innerText === "スタート") {
    // 「スタート」ボタンの場合
    timer = setInterval(addSecond, 1000)
    // 「スタート」ボタンを「ストップ」ボタンに変更
    startStopButton.innerText = "ストップ"
  } else {
    // 「ストップ」ボタンの場合
    clearInterval(timer)
    // 「ストップ」ボタンを「スタート」ボタンに変更
    startStopButton.innerText = "スタート"
  }
}
resetButton.onclick = () => {
  display.innerText = seconds = 0
  clearInterval(timer)
  startStopButton.innerText = "スタート"
}