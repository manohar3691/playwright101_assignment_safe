const { test, expect } = require('@playwright/test');

test('Input Form Submit - validate required and success flow', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.locator('text=Input Form Submit').click();
  await expect(page).toHaveURL(/.*input-form-demo.*/);

  // Step 2: Click Submit without filling anything
  await page.click('button:has-text("Submit")');

  // Step 3: Assert browser validation message for required field
  const nameInput = await page.locator('input[name="name"]');
  const validity = await nameInput.evaluate(el => el.validationMessage);
  expect(validity.toLowerCase()).toContain('fill out this field');

  // Step 4-6: Fill all fields and select country by text
  await page.locator('#name').fill('Manohar N');
  await page.locator('#inputEmail4').fill('manoh11111@gmail.com');
  await page.locator('#inputPassword4').fill('Password123!');
  await page.locator('#company').fill('My Company');
  await page.locator('#websitename').fill('https://example.com');
  await page.locator('#inputAddress1').fill('Street 1');
  await page.locator('#inputAddress2').fill('Street 2');
  await page.locator('#inputCity').fill('Hyderabad');
  await page.selectOption('select[name="country"]', { label: 'United States' });
  await page.locator('#inputState').fill('Telangana');
  await page.locator('#inputZip').fill('500081');

  // Step 6: Click Submit
  await page.click('button:has-text("Submit")');

  // Step 7: Assert success message (use the actual selector for the success message)
  await expect(page.locator('p.success-msg')).toHaveText('Thanks for contacting us, we will get back to you shortly.');
});
