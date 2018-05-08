import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataService } from '../../services/data.service';

import { ContactMessageData } from '../../models/contact-message-data';
@Component({
  selector: 'my-contact-page',
  templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  onSubmit(form: NgForm){
    this.dataService.sendContactMessage(new ContactMessageData(form.value.username, 
                                                                form.value.email,
                                                                form.value.subject,
                                                                form.value.message,
                                                                Date())).subscribe( data => console.log('returned - ' + data));
    console.log(form.value);
  }
}
