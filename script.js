// 確保瀏覽器支援 Web Speech API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!window.SpeechRecognition) {
    alert("您的瀏覽器不支援語音辨識，請使用 Chrome");
}

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;

const startButton = document.getElementById("start-btn");
const resultText = document.getElementById("result");
const wordDisplay = document.getElementById("word");

// 預設的測試單詞
const testWord = "hello";

startButton.addEventListener("click", () => {
    resultText.textContent = "正在聆聽...";
    recognition.start();
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
    console.log("使用者發音：" + transcript);

    if (transcript === testWord) {
        resultText.textContent = `✅ 發音正確！ (${transcript})`;
        resultText.style.color = "green";
    } else {
        resultText.textContent = `❌ 發音錯誤：${transcript}，請再試一次`;
        resultText.style.color = "red";
    }
};

recognition.onerror = (event) => {
    resultText.textContent = "❌ 錯誤：" + event.error;
    resultText.style.color = "red";
};
