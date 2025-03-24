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
            width: 150px; /* 調整 logo 大小 */
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

    <script src="script.js"></script>

</body>
</html>
