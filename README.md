<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>語音辨識測試</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        img {
            width: 150px;
            margin-bottom: 20px;
        }
        input {
            font-size: 18px;
            padding: 10px;
            margin: 10px;
            width: 250px;
            text-align: center;
        }
        button {
            font-size: 18px;
            padding: 10px 20px;
            cursor: pointer;
            margin-top: 10px;
        }
        #result {
            font-size: 24px;
            margin-top: 20px;
            color: blue;
        }
        .partner-section {
            margin-top: 50px;
            padding: 20px;
            background-color: #f4f4f4;
            border-radius: 10px;
        }
        .counter {
            font-size: 20px;
            margin-top: 20px;
            color: green;
        }
    </style>
</head>
<body>

    <!-- 公司 Logo -->
    <img src="logo.png" alt="公司 Logo">

    <h1>語音辨識測試</h1>

    <!-- 受測者姓名輸入框 -->
    <label for="name">受測者姓名：</label>
    <input type="text" id="name" placeholder="請輸入您的姓名">
    
    <br><br>

    <!-- 按鈕啟動語音辨識 -->
    <button onclick="startRecognition()">開始辨識</button>

    <p id="status">狀態：等待開始</p>
    <p><strong>辨識結果：</strong> <span id="result">（無）</span></p>

    <!-- 訪問計數器 -->
    <p class="counter">瀏覽次數：<span id="visitCount">0</span></p>

    <!-- 中國大陸地區合作夥伴 -->
    <div class="partner-section">
        <h2>中國大陸地區合作夥伴</h2>
        <img src="partner.png" alt="合作夥伴 Logo">
    </div>

    <script src="script.js"></script>

</body>
</html>
