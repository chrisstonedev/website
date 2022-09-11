import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "6c7evw",

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:4200",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
