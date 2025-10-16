import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('should navigate to about page from header', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Click on "关于我们" (About Us) link in header
    await page.click('text=关于我们');
    
    // Verify URL changed to /about
    await expect(page).toHaveURL('/about');
  });

  test('should display about page content', async ({ page }) => {
    // Navigate directly to about page
    await page.goto('/about');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check for main heading
    await expect(page.locator('h1')).toContainText('关于我们');
    
    // Check for mission section
    await expect(page.locator('h2').filter({ hasText: '我们的使命' })).toBeVisible();
    
    // Check for core values section
    await expect(page.locator('h2').filter({ hasText: '我们的核心价值观' })).toBeVisible();
    
    // Check for team section
    await expect(page.locator('h2').filter({ hasText: '认识我们的团队' })).toBeVisible();
    
    // Check for stats section
    await expect(page.locator('text=10+')).toBeVisible(); // 10+ years experience
    await expect(page.locator('text=50+')).toBeVisible(); // 50+ destinations
    
    // Check for CTA button
    await expect(page.locator('text=立即预订')).toBeVisible();
  });

  test('should navigate to booking page from CTA button', async ({ page }) => {
    // Navigate to about page
    await page.goto('/about');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Click on "立即预订" (Book Now) button
    await page.click('text=立即预订');
    
    // Verify URL changed to /booking
    await expect(page).toHaveURL('/booking');
  });

  test('should display all three core values', async ({ page }) => {
    // Navigate to about page
    await page.goto('/about');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check for all three core values
    await expect(page.locator('text=专业服务')).toBeVisible();
    await expect(page.locator('text=负责任的旅游')).toBeVisible();
    await expect(page.locator('text=个性化定制')).toBeVisible();
  });

  test('should display team members', async ({ page }) => {
    // Navigate to about page
    await page.goto('/about');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check for team member names
    await expect(page.locator('text=李明')).toBeVisible();
    await expect(page.locator('text=王芳')).toBeVisible();
    await expect(page.locator('text=张伟')).toBeVisible();
    await expect(page.locator('text=刘娜')).toBeVisible();
  });

  test('should have proper page structure and headings', async ({ page }) => {
    // Navigate to about page
    await page.goto('/about');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check h1 exists
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1).toContainText('关于我们');
    
    // Check multiple h2 headings exist
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThan(3); // Should have mission, values, team, and CTA headings
  });

  test('should be responsive - check mobile view', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Navigate to about page
    await page.goto('/about');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Content should still be visible on mobile
    await expect(page.locator('h1')).toContainText('关于我们');
    await expect(page.locator('text=立即预订')).toBeVisible();
  });
});
