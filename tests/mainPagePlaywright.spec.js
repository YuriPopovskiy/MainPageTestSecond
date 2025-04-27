import { test, expect } from '@playwright/test';

const element = [
  {
    locator: (page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo',
    text: 'Playwright',
    atribute: {
      type: 'href',
      value: '/',
    },
  },
    {
    locator: (page) => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs link',
    text: 'Docs',
    atribute: {
      type: 'href',
      value: '/docs/intro',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'API' }),
    name: 'Api link',
    text: 'API',
    atribute: {
      type: 'href',
      value: '/docs/api/class-playwright',
    },
  },
  {
    locator: (page) => page.getByText('Node.jsNode.jsPythonJava.NET'),
    name: 'Node button',
    text: 'Node.jsNode.jsPythonJava.NET'
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Community' }),
    name: 'Community link',
    text: 'Community',
    atribute: {
      type: 'href',
      value: '/community/welcome',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'GitHub link',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Search (Command+K)' }),
    name: 'Search field',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Discord server' }),
    name: 'Discord server link',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'Switch between dark and light',
  },
]

test.describe('main page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
  
test('navigation is visible', async ({ page }) => {
  element.forEach(({ locator, name }) => {
    test.step(`element is visible ${name}`, async () => {
    await expect.soft(locator(page)).toBeVisible();
    })
  });
 
});

test('navigation has a text', async ({ page }) => {
  element.forEach(({ locator, name, text }) => {
    if (text) {
      test.step(`assept has text ${name}`, async () => {
        await expect(locator(page)).toContainText(text);
      });
    };
  });
});

test('navigation has a atribute', async ({ page }) => {
  element.forEach(({ locator, name, atribute }) => {
    if (atribute) {
      test.step(`assept has atribute ${name}`, async () => {
        await expect(locator(page)).toHaveAttribute(atribute?.type, atribute?.value);
      });
    };
  });
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

