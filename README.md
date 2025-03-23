<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>語音辨識</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        #result {
            font-size: 24px;
            margin-top: 20px;
            color: blue;
        }
        button {
            font-size: 18px;
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h1>請說出一個英文字</h1>
    <button onclick="startRecognition()">開始辨識</button>
    <p id="status">狀態：等待開始</p>
    <p><strong>辨識結果：</strong> <span id="result">（無）</span></p>

    <script src="script.js"></script>

</body>
</html>
