import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})




export class ContactComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'phone', 'category','created_at', 'modified_at', 'is_active', 'action'];
    contact: Contact = new Contact();
    dataSource: Array<Contact> = new Array();

    constructor(private service: ConfigService, private router: Router ) {}
    
    ngOnInit(): void {
        this.listContacts();
    }

    listContacts() {
        this.service.getAll().subscribe({
            next: (contacts) => {
                this.dataSource = contacts['results'];
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }
    createContact() {
        this.router.navigate(['contact/create'])
    }
    
    deleteContact(id: any) {
        this.service.delete(id).subscribe({
            next: () => {
                this.contact = new Contact();
                this.listContacts();
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }
}
