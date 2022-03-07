import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  contact: Contact = new Contact;
  constructor(private service: ConfigService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.readByID(id).subscribe((contact) => {
      this.contact = contact;
    });

  }
  editContact() {
    this.service.edit(this.contact).subscribe({
        next: () => {
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
