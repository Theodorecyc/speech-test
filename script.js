// 瀏覽計數器
function updateVisitCount() {
    let count = localStorage.getItem("visitCount");
    if (count === null) {
        count = 0;
    }
    count = parseInt(count) + 1;
    localStorage.setItem("visitCount", count);
    document.getElementById("visitCount").textContent = count;
}

// 語音辨識
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!window.SpeechRecognition) {
    alert("你的瀏覽器不支援 Web Speech API，請使用 Chrome 或 Edge");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

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
        const word = event.results[0][0].transcript;
        document.getElementById("result").textContent = word;
        document.getElementById("status").textContent = "狀態：辨識完成";
        console.log("辨識結果:", word);
    };

    recognition.onerror = function (event) {
        document.getElementById("status").textContent = "狀態：發生錯誤：" + event.error;
        console.error("語音辨識錯誤", event);
    };

    recognition.onspeechend = function () {
        recognition.stop();
        document.getElementById("status").textContent = "狀態：請點擊按鈕再試一次";
    };
}

// 更新訪問次數
updateVisitCount();
