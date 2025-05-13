const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const nodePolyfills = require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "http://localhost:3000",
    env: {
      TAGS: process.env.TAGS,
      base_url: process.env.API_URL,
      site: process.env.SITE
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
