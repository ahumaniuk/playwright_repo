const {test, expect } = require('playwright/test')

//import { test, expect } from '@playwright/test';

test.describe('Test Suite1', () => {

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test and perform login
  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").click();
  await page.locator("#user-name").fill('standard_user');
  await page.locator("#password").click();
  await page.locator("#password").fill('secret_sauce');
  await page.locator("#login-button").click();
});

test.afterEach(async ({page}) =>{
  await page.close();
});

test('ID=1; Perform login, Verify shopping cart and list of products are displayed @smoke', async ({ page }) => {
  await expect(page.locator(".title")).toHaveText('Products');
  await expect(page.locator('#shopping_cart_container > a')).toBeVisible();
  await expect(page.locator('#inventory_container > div > div:nth-child(2)')).toBeVisible();
})

test('ID=2; Verify add product to the cart & remove it @smoke', async ({ page }) => {
  await page.locator("#add-to-cart-sauce-labs-backpack").click();
  await expect(page.locator("#shopping_cart_container>a>span")).toHaveText('1');
  await page.locator("#shopping_cart_container").click();
  await expect(page.locator("#item_4_title_link > div")).toBeVisible()
  await page.locator("#remove-sauce-labs-backpack").click();
  await expect(page.locator("#item_4_title_link > div")).toBeHidden()
})

});
  

