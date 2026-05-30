## GitHub Pages Report

Latest Allure report:

🔗 https://pashadnipro-ws.github.io/WebdriverIO/

## Project Structure

```text
.github/workflows/      GitHub Actions pipeline
config/                 WebdriverIO browser configs
data/                   Test data
docker/                 Dockerfiles for Chrome and Firefox
docs/                   GitHub Pages report
test/
  pageobjects/          Page Objects and UI components
  specs/                Test specifications
.env.example            Example environment variables
docker-compose.yml      Docker services
wdio.conf.js            Base WebdriverIO configuration
```text

## Main Commands

### Run all tests

npm run test

### Run tests against production environment

npm run test:prod

### Run tests against local environment

npm run test:local

### Run Chrome tests

npm run test:chrome

### Run Firefox tests

npm run test:firefox

### Run a single spec in Chrome

npm run test:chrome:spec -- test/specs/navbar.spec.js

### Run a single spec in Firefox

npm run test:firefox:spec -- test/specs/navbar.spec.js

## Allure Report

### Clean previous results

npm run allure:clean

### Generate report

npm run allure:generate

### Open report

npm run allure:open

### Generate and open report

npm run allure:report

## Docker

### Build Docker images

npm run docker:build

### Run Chrome tests in Docker

npm run docker:chrome

### Run Firefox tests in Docker

npm run docker:firefox

### Run all Docker tests

npm run docker:test