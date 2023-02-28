import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/report",
  },
  e2e: {
    setupNodeEvents(on) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/{e2e-tests,api-tests}/**/*.spec.ts",
  },
  watchForFileChanges: false,
});
