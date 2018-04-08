import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ContactService } from './contact.service';

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
  contactService: ContactService;
  defaultName = 'Obi-Wan';

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.contactService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
