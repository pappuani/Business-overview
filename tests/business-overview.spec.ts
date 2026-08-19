import { test, expect } from '@playwright/test';

test.describe('Business Overview Dashboard', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to login page
    await page.goto('https://cafe-test-qr-frontend.vercel.app/login');
    
    // Perform login
    await page.fill('input#email', 'anicafeqr@gmail.com');
    await page.fill('input#password', '123456');
    await page.click('button.submit-btn');

    // Wait for network idle to ensure login is complete
    await page.waitForLoadState('networkidle');

    // Navigate to dashboard directly
    await page.goto('https://cafe-test-qr-frontend.vercel.app/dashboard');
  });

  test('should load the default Chart view and key metrics', async ({ page }) => {
    // Verify the Chart tab is active
    const chartTab = page.locator('button.db-tab:has-text("Chart")');
    await expect(chartTab).toBeVisible();
    await expect(chartTab).toHaveClass(/db-tab--on/);

    // Verify key metric cards are present
    await expect(page.locator('text=Order Status').first()).toBeVisible();
    await expect(page.locator('text=Order Type').first()).toBeVisible();
    await expect(page.locator('text=Payment Method Share').first()).toBeVisible();
    await expect(page.locator('text=Peak Activity Times').first()).toBeVisible();
    await expect(page.locator('text=Best Selling Products').first()).toBeVisible();
  });

  test('should toggle to Graph view and display trends', async ({ page }) => {
    // Switch to Graph View
    await page.click('button.db-tab:has-text("Graph")');
    
    // Verify Graph tab is active
    const graphTab = page.locator('button.db-tab:has-text("Graph")');
    await expect(graphTab).toHaveClass(/db-tab--on/);

    // Verify Metric Toggles are present
    await expect(page.locator('button.gv-mt:has-text("Revenue")')).toBeVisible();
    await expect(page.locator('button.gv-mt:has-text("Count")')).toBeVisible();

    // Verify Chart Area
    await expect(page.locator('.gv-hourly-chart')).toBeVisible();
  });

  test('should toggle to Table view and display data grid with filters', async ({ page }) => {
    // Switch to Table View
    await page.click('button.db-tab:has-text("Table")');

    // Verify Table tab is active
    const tableTab = page.locator('button.db-tab:has-text("Table")');
    await expect(tableTab).toHaveClass(/db-tab--on/);

    // Verify status filters are present
    await expect(page.locator('button.tv-filter:has-text("All")')).toBeVisible();
    await expect(page.locator('button.tv-filter:has-text("Ordered")')).toBeVisible();
    await expect(page.locator('button.tv-filter:has-text("Billed")')).toBeVisible();
    await expect(page.locator('button.tv-filter:has-text("Completed")')).toBeVisible();
    await expect(page.locator('button.tv-filter:has-text("Cancelled")')).toBeVisible();

    // Verify table structure loads (look for basic table headers)
    await expect(page.locator('table th').first()).toBeVisible();
  });
});
