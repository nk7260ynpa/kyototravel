## Context

京都旅遊指南目前是單頁式靜態網站（index.html），使用 Tailwind CSS CDN + vanilla JS。
交通資訊區塊僅有純文字描述，缺乏視覺化的路線圖。網站透過 nginx:alpine Docker 容器部署於 port 8888。

## Goals / Non-Goals

**Goals:**
- 提供互動式京都地圖，呈現 4 條主要觀光公車路線
- 使用者可切換各路線的顯示/隱藏
- 站點標記可點擊查看詳細資訊
- 響應式設計（手機與桌面皆可用）
- 與現有網站風格一致

**Non-Goals:**
- 即時公車追蹤或到站時間
- 步行/自行車路線
- 路線規劃/導航功能
- GTFS 精確路線資料整合

## Decisions

### 1. 地圖套件選擇：Leaflet.js

**選擇**: Leaflet.js + OpenStreetMap 圖磚
**替代方案**: Google Maps API、Mapbox GL JS
**理由**:
- 免費且無需 API Key（Google Maps / Mapbox 需要）
- 與專案現有 CDN 載入方式一致，無需建置工具
- 輕量（~40KB gzipped），足以滿足靜態展示需求
- CDN: `https://unpkg.com/leaflet@1.9.4/dist/leaflet.{css,js}`

### 2. 頁面架構：獨立 map.html

**選擇**: 新增獨立 `map.html` 頁面
**替代方案**: 在 index.html 新增 section
**理由**:
- 地圖需要全螢幕高度空間，不適合與其他內容區塊並列
- Leaflet.js 的 CSS/JS 只有地圖頁需要載入，避免拖慢首頁
- 保持 index.html 作為資訊瀏覽頁的定位不變

### 3. JS 檔案拆分：map-data.js + map.js

**選擇**: 路線資料（座標）與互動邏輯分開
**理由**:
- 路線座標資料量大（每條路線 15-25 個路徑點），分離後便於維護
- 更新路線資料不影響互動邏輯程式碼

### 4. 路線座標方式：手動標記關鍵路徑點

**選擇**: 以主要站點與路口為路徑點，手動定義路線座標
**替代方案**: 整合 GTFS 資料
**理由**:
- 作為觀光參考地圖，近似路線即可滿足需求
- GTFS 資料需要後端處理或建置流程，超出靜態網站範疇
- 每條路線約 15-25 個路徑點，視覺效果足夠

### 5. 圖例面板：可收合覆蓋面板

**選擇**: 桌面版固定於右上角，手機版收合為浮動按鈕
**理由**:
- 不佔用地圖空間，需要時才展開
- 與 Leaflet 內建控制項（左上角縮放）不衝突

## Risks / Trade-offs

- **路線座標精確度有限** → 使用足夠的路徑點（15-25 個/路線）讓視覺效果合理；未來可逐步優化
- **Leaflet CDN 載入速度** → unpkg CDN 在部分地區可能較慢；對靜態旅遊指南可接受
- **iOS Safari 100vh 問題** → 使用 `calc(100dvh - 4rem)` 搭配 fallback `calc(100vh - 4rem)`
- **多頁面導覽一致性** → 兩頁共用相同導覽列結構與樣式，手動同步維護
