import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ContactService } from "../contact.service";

@Component({
  selector: 'contact-me-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contact = this.contactService.findBySlug(params['slug']);
    });
  }

}
