# Chris Stone

This is my personal portfolio website, built using Angular and TypeScript. I write code in WebStorm and test and build
using the Angular CLI. The latest revision as built can be found at [chrisstone.dev](https://chrisstone.dev/).

## Development

To run this project after cloning, run `npm install` in the root directory. It is recommended to use the latest
even-numbered Node release and the latest version of NPM.

### Angular

Angular is used as the front-end framework. Code is written in TypeScript, template markup is written in HTML, and
stylesheets are written in Sass.

### Bootstrap

Additional styling uses the Bootstrap 5 library.

### Scully

Scully is used to deploy the project as a Jamstack static site.

### Jasmine & Karma

Unit tests are written in the Jasmine framework and run using Karma.

### Cypress

End-to-end UI tests are written in Cypress.

## Deployment

This website is hosted on Netlify. New commits to the `main` branch of this repository will trigger a build in Netlify,
which monitors the `main` branch of this repository for changes, then runs `npm run scully:build` and publishes the
files in the `dist/static` directory.

[![Netlify Status](https://api.netlify.com/api/v1/badges/1787925d-7a4c-499d-b6d0-a5058b10261b/deploy-status)](https://app.netlify.com/sites/chrisstonedev/deploys)
