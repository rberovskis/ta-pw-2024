import { test } from "@playwright/test";
import { RegistrationPage } from "../pages/registration.page";

test.describe("Register Tests", () => {
  test("User should be able to register successfully", async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.navigateTo();
    await registerPage.fillRegistrationForm(
      "John",
      "Doe",
      "john.doe@example.com",
      "1234567890",
      "Engineer",
      "Male",
      "password123",
      "password123"
    );
    await registerPage.submitForm();
    // Add assertions here
  });
});
