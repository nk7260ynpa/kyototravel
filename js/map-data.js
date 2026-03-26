/**
 * 京都主要觀光公車路線資料
 *
 * 每條路線包含：
 * - id: 路線識別碼
 * - name: 路線名稱
 * - nameShort: 路線編號（簡稱）
 * - description: 路線走向說明
 * - color: 路線顯示顏色（hex）
 * - stops: 站點陣列，每站包含 name、lat、lng、isTerminal
 * - path: 路徑座標陣列 [lat, lng]，用於繪製 polyline
 */
const KYOTO_BUS_ROUTES = [];
