import { test, expect } from '@playwright/test';
import { cvs } from './fixtures/cvs-fixtures';

test('has cvs', async ({ page }) => {
 await page.route('**/personnes**', async route => {
    const json = cvs;
    await route.fulfill({
      json,
    }); // On renvoie notre faux JSON
  });
  await page.goto('/cv');

  // Expect a title "to contain" a substring.
  await expect(page).toBeDefined();
  const listCvs2 = await page.getByTestId('listCvs');
  // Je veux vérifier que j'ai 7 éléments dans ma liste de CVs
  const lis = await listCvs2.locator(':scope > li');
  await expect(lis).toHaveCount(3);
/*   expect(listCvs2).toHaveCount(7);*/
  //expect(lis).toHaveCount(7);
  const card = await page.getByTestId('cvCard');
  /* await expect(card).toHaveCount(0); */
  await expect(card).not.toBeVisible();
  // Vérifie que l'élément card n'existe pas dans le DOM

  await lis.nth(0).click();
  await expect(page.getByTestId('cvCard')).toContainText(cvs[0].name);
  await card.hover();
  const detailBtn = await page.getByTestId('detailBtn');

  await page.route('**/personnes/1', async route => {
    const json = cvs[0];
/*     page.on('console', msg => {
      console.log('fulfill');
    }) */
    await route.fulfill({ json }); // On renvoie notre faux JSON
  });
  await detailBtn.dispatchEvent('click')
  /* await Promise.all([
    page.waitForURL(/\/cv\/1285$/),
    detailBtn.dispatchEvent('click'), // click DOM direct
]); */
  await expect(page).toHaveURL(`/cv/${cvs[0].id}`);
  //await expect(page.getByText('Informations')).toBeVisible();
});
