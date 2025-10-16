# Playwright Tests

This directory contains end-to-end tests for the Travel Site application using [Playwright](https://playwright.dev/).

## Running Tests

### Prerequisites

Make sure you have installed all dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install chromium
```

### Running Tests

Run all tests:

```bash
npm test
```

Run tests in UI mode (interactive):

```bash
npm run test:ui
```

View test report:

```bash
npm run test:report
```

### Test Files

- `about.spec.ts` - Tests for the About page, including:
  - Navigation from header
  - Content verification
  - CTA button functionality
  - Responsive design
  - Team and values sections

## Writing New Tests

When writing new tests, follow the existing patterns:

1. Use descriptive test names
2. Test user interactions and navigation
3. Verify content is displayed correctly
4. Include responsive design tests where applicable
5. Use appropriate selectors (prefer accessible selectors like roles and text)

## Configuration

The Playwright configuration is in `playwright.config.ts` at the root of the project.

Key settings:
- Base URL: `http://localhost:5173`
- Tests run against local dev server (auto-started)
- Configured for Chromium browser
- HTML reporter enabled
