import { Component, OnInit, ViewEncapsulation } from '@angular/core';

let lightModeIcon = '🌞';
let darkModeIcon = '🌚';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  darkMode = false;
  theme = lightModeIcon;

  ngOnInit(): void {
    let themeInStorage = localStorage.getItem('theme');
    let matchMedia = window.matchMedia;
    if (themeInStorage === 'dark'
      || (!themeInStorage && matchMedia && matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.theme = darkModeIcon;
      this.darkMode = true;
    }
  }

  switchToggled() {
    if (this.darkMode) {
      localStorage.setItem('theme', 'light');
      this.theme = lightModeIcon;
      document.documentElement.setAttribute('data-theme', 'light');
      this.darkMode = false;
    } else {
      localStorage.setItem('theme', 'dark');
      this.theme = darkModeIcon;
      document.documentElement.setAttribute('data-theme', 'dark');
      this.darkMode = true;
    }
  }
}
