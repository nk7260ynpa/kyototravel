## Why

目前京都旅遊指南網站的交通資訊僅以純文字呈現，遊客無法直覺理解公車路線走向與站點位置。
需要新增互動式地圖頁面，視覺化呈現主要觀光公車路線，幫助旅客規劃交通。

## What Changes

- 新增獨立地圖頁面 `map.html`，使用 Leaflet.js + OpenStreetMap 呈現互動式京都地圖
- 繪製 4 條主要觀光公車路線（急行100、急行101、205、206）的路線圖與站點標記
- 提供圖例面板，可切換各路線的顯示/隱藏
- 站點標記可點擊查看站名與經過路線資訊
- 修改現有導覽列，加入地圖頁面連結（雙向導航）
- 響應式設計，支援手機與桌面瀏覽

## Capabilities

### New Capabilities
- `bus-route-map`: 互動式公車路線地圖頁面，包含路線繪製、站點標記、圖例控制面板

### Modified Capabilities
- `website-core`: 新增跨頁面導覽需求（導覽列加入地圖頁連結）

## Impact

- 新增檔案：`map.html`、`js/map-data.js`、`js/map.js`
- 修改檔案：`index.html`（導覽列）、`css/style.css`、`docker/Dockerfile`
- 新增外部依賴：Leaflet.js CDN（無需 API Key）
- Docker image 需包含新頁面
