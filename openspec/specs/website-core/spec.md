# Website Core Specification

## Overview
京都旅遊指南網頁，提供遊客實用的旅遊資訊。

## Requirements

### REQ-001: Hero Section
The system SHALL display a hero section with:
- 京都代表性背景圖片
- 網站標題「京都旅遊指南」
- 簡短描述文字
- CTA 按鈕導向景點區塊

### REQ-002: Attractions Section
The system SHALL display at least 6 個京都景點卡片，每張包含：
- 景點照片
- 景點名稱（中日文）
- 簡短介紹（50-100字）
- 推薦造訪季節
- 門票資訊

### REQ-003: Food Section
The system SHALL display 美食推薦區塊，包含：
- 至少 4 間推薦餐廳
- 餐廳名稱、料理類型、價格範圍
- 地址與營業時間

### REQ-004: Transportation Section
The system SHALL display 交通指南，包含：
- 從大阪/東京到京都的方式
- 京都市內交通（巴士、地鐵）
- 推薦票券（巴士一日券等）

### REQ-005: Itinerary Section
The system SHALL display 建議行程，包含：
- 一日遊路線
- 兩日遊路線
- 各行程的時間安排與交通方式

### REQ-006: Responsive Design
The system SHALL be fully responsive:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### REQ-007: Navigation
The system SHALL include a fixed top navigation bar with:
- 網站 Logo
- 各區塊錨點連結
- Mobile hamburger menu