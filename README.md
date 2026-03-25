# 京都旅遊指南 Kyoto Travel Guide

一個介紹京都旅遊資訊的靜態網頁，包含景點推薦、美食推薦、交通資訊與行程規劃。

## 功能

- Hero 區塊（背景圖片、標題、CTA 按鈕）
- 景點推薦（6 個京都景點卡片）
- 美食推薦（4 間推薦餐廳）
- 交通指南（城際與市內交通、推薦票券）
- 建議行程（一日遊與兩日遊路線）
- 固定導覽列與 Mobile hamburger menu
- 響應式設計（Mobile / Tablet / Desktop）

## 技術棧

- HTML + CSS + JavaScript
- Tailwind CSS（CDN）
- 純靜態網站，無需後端

## 專案架構

```
kyototravel/
├── index.html              # 主頁面
├── css/
│   └── style.css           # 自訂樣式
├── js/
│   └── main.js             # JavaScript 邏輯
├── images/                 # 圖片資源
├── docker/
│   ├── Dockerfile          # Docker image 定義
│   └── docker-compose.yml  # Docker Compose 設定
├── run.sh                  # 啟動腳本
├── openspec/               # OpenSpec 規格文件
│   ├── project.md
│   ├── config.yaml
│   ├── specs/
│   └── changes/
└── README.md
```

## 使用方法

### 直接開啟

在瀏覽器中開啟 `index.html` 即可瀏覽網頁。

### Docker 啟動

使用 `run.sh` 一鍵啟動：

```bash
./run.sh
```

或手動執行 Docker 指令：

```bash
# 建立 Docker image
docker build -t kyototravel -f docker/Dockerfile .

# 使用 Docker Compose 啟動
docker compose -f docker/docker-compose.yml up -d

# 瀏覽網頁
open http://localhost:8888

# 停止容器
docker compose -f docker/docker-compose.yml down
```
