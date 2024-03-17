const {test, expect } = require('playwright/test')

//import { test, expect } from '@playwright/test';

test('Perform login, Verify shopping cart and list of products are displaye', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").click();
  await page.locator("#user-name").fill('standard_user');
  await page.locator("#password").click();
  await page.locator("#password").fill('secret_sauce');
  await page.locator("#login-button").click();
  await expect(page.locator(".title")).toHaveText('Products');
  await expect(page.locator('#shopping_cart_container > a')).toBeVisible();
  const elementCount = await page.evaluate(() => {
    return document.querySelectorAll('#inventory_container').length;
  });
  await expect(elementCount).toBeGreaterThan(1);
})



  