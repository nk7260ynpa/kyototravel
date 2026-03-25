# Website Core - Add Docker Delta

## ADDED Requirements

### Requirement: Docker Container Support
The system SHALL be deployable and runnable inside a Docker container using Nginx.

#### Scenario: User runs the site via Docker Compose
- GIVEN the user has Docker and Docker Compose installed
- WHEN the user runs docker compose up in the project root
- THEN the website is accessible at http://localhost:8080
- AND all sections render correctly

#### Scenario: User builds the Docker image
- GIVEN the user is in the project root directory
- WHEN the user runs docker build -t kyototravel .
- THEN a Docker image is created successfully
- AND the image contains the static site served by Nginx

#### Scenario: User stops the container
- GIVEN the container is running
- WHEN the user runs docker compose down
- THEN the container stops and the port is released