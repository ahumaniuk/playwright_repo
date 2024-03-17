const {test, expect } = require('playwright/test')

//import { test, expect } from '@playwright/test';

test('Verify add product to the cart & remove it', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").click();
  await page.locator("#user-name").fill('standard_user');
  await page.locator("#password").click();
  await page.locator("#password").fill('secret_sauce');
  await page.locator("#login-button").click();
  //await expect(page.locator(".title")).toHaveText('Products');
  await page.locator("#add-to-cart-sauce-labs-backpack").click();
  await expect(page.locator("#shopping_cart_container>a>span")).toHaveText('1');
  await page.locator("#shopping_cart_container").click();
  await expect(page.locator("#item_4_title_link > div")).toBeVisible()
  await page.locator("#remove-sauce-labs-backpack").click();
  await expect(page.locator("#item_4_title_link > div")).toBeHidden()
} 
)



  