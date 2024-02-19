import { Component } from '@angular/core';
import { contactData } from './contact-us-data'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactData = contactData
}
