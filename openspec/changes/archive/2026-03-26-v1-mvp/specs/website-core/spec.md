# Website Core - V1 MVP Delta

## ADDED Requirements

### Requirement: Hero Section
The system SHALL display a hero section with a background image, title, subtitle, and CTA button.

#### Scenario: User lands on homepage
- GIVEN the user opens the website
- WHEN the page loads
- THEN a full-width hero section is displayed with:
  - 京都代表性背景圖片
  - 標題「京都旅遊指南」
  - 簡短描述文字
  - CTA 按鈕可滾動至景點區塊

### Requirement: Attractions Section
The system SHALL display at least 6 attraction cards with photo, name, description, season, and ticket info.

#### Scenario: User browses attractions
- GIVEN the user scrolls to the attractions section
- WHEN the section is visible
- THEN at least 6 cards are displayed, each containing:
  - 景點照片
  - 景點名稱（中日文）
  - 簡短介紹（50-100字）
  - 推薦造訪季節
  - 門票資訊

### Requirement: Food Section
The system SHALL display a food recommendation section with restaurant details.

#### Scenario: User browses food recommendations
- GIVEN the user scrolls to the food section
- WHEN the section is visible
- THEN at least 4 restaurant cards are displayed, each containing:
  - 餐廳名稱
  - 料理類型與價格範圍
  - 地址與營業時間

### Requirement: Transportation Section
The system SHALL display a transportation guide for getting to and around Kyoto.

#### Scenario: User checks transportation info
- GIVEN the user scrolls to the transportation section
- WHEN the section is visible
- THEN the following info is displayed:
  - 從大阪/東京到京都的交通方式
  - 京都市內交通（巴士、地鐵）
  - 推薦票券資訊

### Requirement: Itinerary Section
The system SHALL display suggested travel itineraries.

#### Scenario: User views itinerary suggestions
- GIVEN the user scrolls to the itinerary section
- WHEN the section is visible
- THEN at least two itineraries are displaye