# Website

This is my personal portfolio website, built using Angular and TypeScript. I write code in WebStorm and test and build
using the Angular CLI. Recently, the build process has also used Scully to generate a static site version for better
performance.

This app is hosted on Netlify and can be found at [chrisstone.dev](https://chrisstone.dev).

[![Netlify Status](https://api.netlify.com/api/v1/badges/1787925d-7a4c-499d-b6d0-a5058b10261b/deploy-status)](https://app.netlify.com/sites/chrisstonedev/deploys)

[![website](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/6c7evw/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/6c7evw/runs)

## Development

### Prerequisites

This project requires the NPM package manager. All project dependencies can be installed by running `npm install` in the
root directory. It is recommended to use the latest even-numbered Node release and the latest version of NPM. If Angular
CLI commands do not work in the directory, try installing the CLI globally:

```bash
npm install -g @angular/cli
```

### Angular

Angular is used as the front-end framework. Code is written in TypeScript, template markup is written in HTML, and
stylesheets are written in Sass.

Updates to the Angular dependencies should be done via `ng angular`. Updates to new major versions of Angular through
the Angular CLI will automate addressing most or all breaking changes introduced.

### Bootstrap

Additional styling uses the Bootstrap 5 library.

### Scully

Scully is used to deploy the project as a Jamstack static site.

### Jasmine & Karma

Unit tests are written in the Jasmine framework and run using Karma.

### Cypress

End-to-end UI tests are written in Cypress.

### Writing code

New files can be created using the Angular CLI. Enter `ng g` into a terminal for more information on the types of
schematics that can be generated in this manner. Creating files through the Angular CLI will also add references to
relevant modules automatically (though some, such as routing modules, may still need manual assistance).

## Running

Run `npm run start` to run the app on a local server. This will not run the app in Scully's static mode, but allows for
faster feedback and live reloading and is sufficient in most cases for local server testing.

## Deploying

This website is hosted on Netlify. New commits to the `main` branch of this repository will trigger a build in Netlify,
which monitors the `main` branch of this repository for changes, then runs `npm run scully:build` and publishes the
files in the `dist/static` directory.

## Future work

I am constantly updating this project and will soon be adding the following features:

* Adding CSS animations to give the pages a more lively feel.
* An overall redesign of the theme, including some color changes.
