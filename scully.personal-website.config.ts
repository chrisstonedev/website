import {registerPlugin, ScullyConfig} from '@scullyio/scully';

const projectData = require('./src/assets/projects-data.json');

registerPlugin('router', 'portfolioSlugPlugin', async () => {
  return projectData.map(x => {
    return {route: `/portfolio/${x.id}`};
  });
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "personal-website",
  outDir: './dist/static',
  routes: {
    "/portfolio/:slug": {
      type: 'portfolioSlugPlugin'
    }
  }
};
