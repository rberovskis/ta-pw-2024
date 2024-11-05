import { Page } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("client/auth/register");
  }

  async fillRegistrationForm(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    occupation: string,
    gender: "Male" | "Female",
    password: string,
    confirmPassword: string
  ) {
    await this.page.locator('input[name="firstName"]').fill(firstName);
    await this.page.locator('input[name="lastName"]').fill(lastName);
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="phoneNumber"]').fill(phoneNumber);
    await this.page
      .locator('select[name="occupation"]')
      .selectOption(occupation);
    await this.page.locator(`input[value="${gender}"]`).check();
    await this.page.locator('input[name="password"]').fill(password);
    await this.page
      .locator('input[name="confirmPassword"]')
      .fill(confirmPassword);
  }

  async submitForm() {
    await this.page.locator('button[type="submit"]').click();
  }
}
