import { browser, by, element } from 'protractor';

export class ProjectsPage {
  navigateTo() {
    return browser.get('/projects');
  }

  getUnorderedList() {
    return element(by.css('ul')).isPresent();
  }

  getFilterCheckBox() {
    return element(by.css('input'));
  }

  getProjects() {
    return element.all(by.css('app-item'));
  }
}
