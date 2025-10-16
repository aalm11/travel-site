import { test, expect } from "@playwright/test";

test.describe("Destination Detail Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should navigate to detail page when clicking on destination card button", async ({ page }) => {
    // Wait for the page to load and destinations to be visible
    await page.waitForSelector('button:has-text("查看详情")');

    // Click the first "查看详情" button
    await page.click('button:has-text("查看详情")', { position: { x: 5, y: 5 } });

    // Wait for navigation to complete
    await page.waitForURL(/\/destination\/.+/);

    // Verify we're on a detail page
    expect(page.url()).toMatch(/\/destination\/\d+/);
  });

  test("should display destination details on detail page", async ({ page }) => {
    // Navigate to a specific destination
    await page.goto("/destination/1");

    // Wait for content to load
    await page.waitForSelector("h1");

    // Check that essential elements are present
    await expect(page.locator("h1")).toContainText("巴厘岛");
    await expect(page.locator('text="目的地介绍"')).toBeVisible();
    await expect(page.locator('button:has-text("立即预订")')).toBeVisible();
    await expect(page.locator('button:has-text("返回首页")')).toBeVisible();
  });

  test("should show detailed information about the destination", async ({ page }) => {
    await page.goto("/destination/1");

    // Check for specific sections
    await expect(page.locator('text="亮点特色"')).toBeVisible();
    await expect(page.locator('text="推荐活动"')).toBeVisible();
    await expect(page.locator('text="费用包含"')).toBeVisible();
    await expect(page.locator('text="精彩图集"')).toBeVisible();

    // Check for price display
    await expect(page.locator('text=/￥\\d+/')).toBeVisible();

    // Check for rating
    await expect(page.locator('text=/⭐/')).toBeVisible();
  });

  test("should navigate back to home when clicking return button", async ({ page }) => {
    await page.goto("/destination/1");

    // Click the return to home button
    await page.click('button:has-text("返回首页")');

    // Wait for navigation
    await page.waitForURL("/");

    // Verify we're on the home page
    expect(page.url()).toContain("/");
    await expect(page.locator('text="热门目的地"')).toBeVisible();
  });

  test("should navigate to booking page when clicking book button", async ({ page }) => {
    await page.goto("/destination/1");

    // Click the booking button
    await page.click('button:has-text("立即预订")');

    // Wait for navigation
    await page.waitForURL(/\/booking/);

    // Verify we're on the booking page
    expect(page.url()).toContain("/booking");
  });

  test("should show not found message for non-existent destination", async ({ page }) => {
    await page.goto("/destination/999");

    // Check for not found message
    await expect(page.locator('text="目的地未找到"')).toBeVisible();
    await expect(page.locator('button:has-text("返回首页")')).toBeVisible();
  });

  test("should display destination gallery images", async ({ page }) => {
    await page.goto("/destination/1");

    // Wait for gallery section
    await page.waitForSelector('text="精彩图集"');

    // Check that gallery images are present
    const galleryImages = page.locator(".grid img");
    await expect(galleryImages.first()).toBeVisible();

    // Verify multiple images are displayed
    const count = await galleryImages.count();
    expect(count).toBeGreaterThan(0);
  });

  test("should display destination highlights", async ({ page }) => {
    await page.goto("/destination/2"); // Tokyo

    // Wait for highlights section
    await page.waitForSelector('text="亮点特色"');

    // Check for specific highlights
    await expect(page.locator('text="东京塔"')).toBeVisible();
  });

  test("should display activities", async ({ page }) => {
    await page.goto("/destination/3"); // Paris

    // Wait for activities section
    await page.waitForSelector('text="推荐活动"');

    // Check that activities are displayed
    const activities = page.locator(".flex.flex-wrap.gap-2 span");
    await expect(activities.first()).toBeVisible();
  });

  test("should navigate between different destinations", async ({ page }) => {
    // Start at home
    await page.goto("/");

    // Click first destination
    const firstButton = page.locator('button:has-text("查看详情")').first();
    await firstButton.click();
    await page.waitForURL(/\/destination\/1/);

    // Go back to home
    await page.click('button:has-text("返回首页")');
    await page.waitForURL("/");

    // Click second destination
    const secondButton = page.locator('button:has-text("查看详情")').nth(1);
    await secondButton.click();
    await page.waitForURL(/\/destination\/2/);

    // Verify we're on a different destination
    await expect(page.locator("h1")).toContainText("东京");
  });
});
