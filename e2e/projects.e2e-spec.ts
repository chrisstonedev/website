import { ProjectsPage } from './projects.po';

describe('Projects List Page', () => {
  let page: ProjectsPage;

  beforeEach(() => {
    page = new ProjectsPage();
    page.navigateTo();
  });

  it('should have an unordered list', () => {
    expect(page.getUnorderedList()).toBeTruthy();
  });

  it('should have 13 projects in the default list', () => {
    expect(page.getProjects().count()).toBe(13);
    expect(page.getFilterCheckBox().getAttribute('checked')).toBeFalsy();
  });

  it('should have 6 projects in the filtered list', () => {
    const filterCheckBox = page.getFilterCheckBox();
    filterCheckBox.click();
    expect(page.getProjects().count()).toBe(6);
    expect(filterCheckBox.getAttribute('checked')).toBeTruthy();
  });

  it('should have 13 projects after unfiltering again', () => {
    const filterCheckBox = page.getFilterCheckBox();
    filterCheckBox.click();
    filterCheckBox.click();
    expect(page.getProjects().count()).toBe(13);
    expect(filterCheckBox.getAttribute('checked')).toBeFalsy();
  });
});
