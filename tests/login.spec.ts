import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test.describe("Login Tests", () => {
  test("User should be able to log in with valid credentials", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.login("test@example.com", "password123");
    // Add assertions here
  });
});
