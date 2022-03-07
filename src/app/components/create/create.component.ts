import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  contact: Contact = new Contact();
  constructor(private service: ConfigService, private router: Router) { }

  ngOnInit(): void {
  }
  createContact() {
    this.service.create(this.contact).subscribe({
        next: () => {
            this.contact = new Contact();
            this.router.navigate(['/contact'])
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
    });
  }

  cancel(){
    this.router.navigate(['/contact'])
  }
}
