## MODIFIED Requirements

### Requirement: Navigation Bar
The system SHALL include a fixed top navigation bar with anchor links and cross-page navigation.

#### Scenario: User navigates via navbar on desktop
- GIVEN the user is on any part of the page
- WHEN the user clicks a nav link
- THEN the page smooth-scrolls to the corresponding section

#### Scenario: User navigates via hamburger menu on mobile
- GIVEN the user is on a mobile device
- WHEN the user taps the hamburger icon
- THEN a dropdown menu appears with all section links

#### Scenario: User navigates to the bus route map page
- GIVEN the user is on the homepage (index.html)
- WHEN the user clicks the "巴士地圖" link in the navigation bar
- THEN the user is navigated to map.html

#### Scenario: User navigates back to homepage from map page
- GIVEN the user is on the map page (map.html)
- WHEN the user clicks a homepage section link in the navigation bar
- THEN the user is navigated back to the corresponding section on index.html
