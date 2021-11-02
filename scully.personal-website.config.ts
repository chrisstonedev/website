import {registerPlugin, ScullyConfig} from '@scullyio/scully';
import projectData from './src/assets/projects-data.json';

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
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    "/portfolio/:slug": {
      type: 'portfolioSlugPlugin'
    }
  }
};
