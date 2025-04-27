import { test, expect } from '@playwright/test';

test.describe('main page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
  
test('navigation is visible', async ({ page }) => {

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByText('Node.jsNode.jsPythonJava.NET')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search (Command+K)' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
});

test('navigation has a text', async ({ page }) => {


  await expect(page.getByLabel('Main', { exact: true })).toContainText('Playwright');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Docs');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('API');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Node.js');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Community');
});

test('navigation has a atribute', async ({ page }) => {


  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute('href', '/');
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute('href', '/docs/api/class-playwright');
  await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute('href', '/community/welcome');
});

test('switched dark and light', async ({ page }) => {


  const themeSwitcher = page.getByRole('button', { name: 'Switch between dark and light' });
  await themeSwitcher.click();
  await expect(themeSwitcher).toHaveAttribute('aria-label', 'Switch between dark and light mode (currently dark mode)');
});

test('Text on main page', async ({ page }) => {

  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
});

test('Text Get Started', async ({ page }) => {

  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
  await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '/docs/intro');

});
})

