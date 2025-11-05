const { test, expect } = require('@playwright/test');

test('Drag & Drop Sliders - move slider to 95', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.locator('text=Drag & Drop Sliders').click();
  await expect(page).toHaveURL(/.*drag-drop-range-sliders.*/);

  // Use the specific slider and output by ID
  const slider = page.locator('#slider3 input[type="range"]');
  const valueDisplay = page.locator('#rangeSuccess');

  await slider.fill('95');
  await page.click('body');
  await expect(valueDisplay).toHaveText('95');
});
