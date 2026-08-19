# Business Overview Automation

This repository contains the automated End-to-End (E2E) tests for the Business Overview module of the Cafe QR application. 

The tests are built using **Playwright** and **TypeScript**.

## Project Structure

- `tests/business-overview.spec.ts` - The primary test suite containing all automated scenarios for the Business Overview dashboard.
- `playwright.config.ts` - The Playwright configuration file setting up the testing environments (Chromium, Firefox, WebKit).

## Test Coverage

The automation suite currently covers the following scenarios:
1. **Authentication:** Logs into the dashboard using test credentials.
2. **Chart View:** Verifies the default view and the presence of critical metric cards (Order Status, Order Type, Payment Method Share, Peak Activity Times, Best Selling Products).
3. **Graph View:** Verifies the trend lines over time and the Revenue/Count metric toggles.
4. **Table View:** Verifies the data grid and the filtering options (All, Ordered, Billed, Completed, Cancelled).

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/pappuani/Business-overview.git
   ```
2. Navigate into the directory:
   ```bash
   cd Business-overview
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running the Tests

To run the tests in headless mode (across all configured browsers):
```bash
npx playwright test
```

To run the tests in UI mode (great for debugging):
```bash
npx playwright test --ui
```

To run a specific test file:
```bash
npx playwright test tests/business-overview.spec.ts
```
