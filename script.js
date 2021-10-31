let seconds = 0
let timer
const display = document.getElementById('display')
const startStopButton = document.getElementById('start-stop')
const resetButton = document.getElementById('reset')

// ***** 以下を追加 *****
// 「スタート」「ストップ」ボタンがクリックされたとき
startStopButton.onclick = () => {
  if (startStopButton.innerText === "スタート") {
    // 「スタート」ボタンの場合

    // 「スタート」ボタンを「ストップ」ボタンに変更
    startStopButton.innerText = "ストップ"
  } else {
    // 「ストップ」ボタンの場合

    // 「ストップ」ボタンを「スタート」ボタンに変更
    startStopButton.innerText = "スタート"
  }
}