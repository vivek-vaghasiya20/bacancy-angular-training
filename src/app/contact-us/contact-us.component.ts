import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactId: string = '';
  name: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.contactId = params['contactId'];
    });

    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
      this.email = params['email'];
    });
  }
}
