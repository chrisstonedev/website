import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  characters = [
    { name: 'TRAX', platform: 'Android' },
    { name: 'oneFreight', platform: '' }
  ];
  chosenList

  constructor() { }

  ngOnInit() {
  }

  getCharacters() {
    
  }
}
