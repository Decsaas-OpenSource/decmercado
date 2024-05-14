import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/app/carrinho', { waitUntil: "networkidle" });
});

test('deve abrir uma lista com dois produtos', async ({ page }) => {

});