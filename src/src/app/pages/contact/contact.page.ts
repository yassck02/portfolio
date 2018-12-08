import { Component } from '@angular/core';

@Component({
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.css'],
})
export class ContactPage {
    name: string;
    email: string;
    message: string;

    constructor() {}

    ngOnInit() {}

    processForm() {
        if(this.name == undefined || this.name.length < 3) {
            alert("ERROR: Name must be at least 3 characters")
            return;
        }
        if(this.email == undefined || this.email.length < 3) {
            alert("ERROR: Please enter a valid email address")
            return;
        }
        if(this.message == undefined || this.message.length <= 0) {
            alert("ERROR: Please enter a message")
            return;
        }

    }
}
