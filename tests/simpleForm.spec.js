const { test, expect } = require('@playwright/test');

test('Simple Form Demo - verify message is reflected', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.waitForSelector('text=Simple Form Demo', { state: 'visible' });
  await page.click('text=Simple Form Demo');
  await expect(page).toHaveURL(/.*simple-form-demo.*/);

  const msg = 'Welcome to LambdaTest';
  await page.fill('#user-message', msg);
  await page.click('text=Get Checked value');
  await expect(page.locator('#message')).toHaveText(msg); // Use the actual result selector
});
