## Report Link

[allure-report](https://pashadnipro-ws.github.io/WebdriverIO/)

---

# Project Structure

```text
.github/workflows/      GitHub Actions pipeline
config/                 WebdriverIO browser configs
data/                   Test data
docker/                 Dockerfiles for Chrome and Firefox
docs/                   test-cases doc

test/
├── pageobjects/        Page Objects and UI components
└── specs/              Test specifications

.env.example            Example environment variables
docker-compose.yml      Docker services
wdio.conf.js            Base WebdriverIO configuration
```

---

# Main Commands

### Run all tests

```bash
npm run test
```

### Run tests against production environment

```bash
npm run test:prod
```

### Run tests against local environment

```bash
npm run test:local
```

### Run Chrome tests

```bash
npm run test:chrome
```

### Run Firefox tests

```bash
npm run test:firefox
```

### Run a single spec in Chrome

```bash
npm run test:chrome:spec -- test/specs/navbar.spec.js
```

### Run a single spec in Firefox

```bash
npm run test:firefox:spec -- test/specs/navbar.spec.js
```

---

# Allure Report

### Clean previous results

```bash
npm run allure:clean
```

### Generate report

```bash
npm run allure:generate
```

### Open report

```bash
npm run allure:open
```

### Generate and open report

```bash
npm run allure:report
```

---

# Docker

### Build Docker images

```bash
npm run docker:build
```

### Run Chrome tests in Docker

```bash
npm run docker:chrome
```

### Run Firefox tests in Docker

```bash
npm run docker:firefox
```

### Run all Docker tests

```bash
npm run docker:test
```

---