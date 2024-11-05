import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  reporter: [
    ["list"],
    ["html", { open: "never", outputFolder: "./reports/pw_reg" }],
  ],
  use: {
    baseURL: "https://rahulshettyacademy.com/",
    headless: true,
    //Full logs on local runs, failures-only in CI.
    trace: "on",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
};

export default config;
