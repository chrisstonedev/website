import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'},
  ];
  swService: StarWarsService;
  defaultName = 'Obi-Wan';

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
