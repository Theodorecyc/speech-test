// 確保瀏覽器支援 Web Speech API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!window.SpeechRecognition) {
    alert("你的瀏覽器不支援 Web Speech API，請使用 Chrome 或 Edge");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US"; // 設定語言為英文
    recognition.interimResults = false; // 只返回最終結果
    recognition.maxAlternatives = 1; // 只要最可能的結果

    function startRecognition() {
        const userName = document.getElementById("name").value.trim();

        if (userName === "") {
            alert("請先輸入您的姓名！");
            return;
        }

        document.getElementById("status").textContent = "狀態：正在聆聽...";
        recognition.start();
    }

    recognition.onresult = function (event) {
        const word = event.results[0][0].transcript; // 取得辨識結果
        document.getElementById("result").textContent = word;
        document.getElementById("status").textContent = "狀態：辨識完成";
        console.log("辨識結果:", word);
    };

    recognition.onerror = function (event) {
        document.getElementById("status").textContent = "狀態：發生錯誤：" + event.error;
        console.error("語音辨識錯誤", event);
    };

    recognition.onspeechend = function () {
        recognition.stop(); // 停止語音辨識
        document.getElementById("status").textContent = "狀態：請點擊按鈕再試一次";
    };
}
