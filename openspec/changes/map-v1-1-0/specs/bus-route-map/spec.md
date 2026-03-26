## ADDED Requirements

### Requirement: Bus Route Map Page
The system SHALL provide an interactive map page displaying Kyoto bus routes using Leaflet.js and OpenStreetMap.

#### Scenario: User opens the map page
- **WHEN** user navigates to map.html
- **THEN** a full-viewport interactive map is displayed centered on Kyoto city
- **AND** the map uses OpenStreetMap tiles with proper attribution

#### Scenario: User views bus routes on the map
- **WHEN** the map page loads
- **THEN** 4 bus routes are displayed as colored polylines:
  - 急行100（玫紅色）：京都駅→清水寺→祇園→平安神宮→銀閣寺
  - 急行101（藍色）：京都駅→二条城→北野天滿宮→金閣寺
  - 205（綠色）：環狀路線經下鴨、金閣寺方面
  - 206（橘色）：環狀路線經清水寺、祇園、北大路

#### Scenario: User clicks a bus stop marker
- **WHEN** user clicks on a bus stop circle marker
- **THEN** a popup is displayed showing the stop name and the bus routes serving that stop

### Requirement: Route Legend Control Panel
The system SHALL provide a legend panel for controlling route visibility.

#### Scenario: User toggles a route on desktop
- **WHEN** user unchecks a route checkbox in the legend panel
- **THEN** that route's polyline and stop markers are hidden from the map
- **AND** re-checking the checkbox restores visibility

#### Scenario: User uses Show All / Hide All
- **WHEN** user clicks the "全部顯示" or "全部隱藏" button
- **THEN** all routes are shown or hidden accordingly
- **AND** all checkboxes update to match

#### Scenario: User views legend on mobile
- **WHEN** user opens the map page on a device with width < 768px
- **THEN** the legend panel is collapsed to a floating button
- **AND** tapping the button expands the legend panel

### Requirement: Map Page Responsive Design
The system SHALL be fully responsive on the map page.

#### Scenario: User views map on mobile
- **WHEN** user opens map.html on a device with width < 768px
- **THEN** the map fills the available viewport height below the navbar
- **AND** the navigation bar displays a hamburger menu

#### Scenario: User views map on desktop
- **WHEN** user opens map.html on a device with width >= 1024px
- **THEN** the map fills the available viewport height below the navbar
- **AND** the legend panel overlays on the right side of the map
