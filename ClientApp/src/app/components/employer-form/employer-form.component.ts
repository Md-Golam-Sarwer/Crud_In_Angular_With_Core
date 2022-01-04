import { Component, OnInit } from '@angular/core';

import { EmployerService } from './../../services/employer.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html',
  styleUrls: ['./employer-form.component.css']
})
export class EmployerFormComponent implements OnInit {
  employerID: any;
  name: any;
  email: any;
  address: any;
  joiningDate: any;
  isActive: any;

  branchID: number;
  branchList: Array<number> = [];

  employer = { employerID: 0 };


  constructor(private route: ActivatedRoute, private router: Router, private employerService: EmployerService) {
    route.params.subscribe(t => {
      this.employer.employerID = t["id"];
    }, err => {
      if (err.status == 404)
        this.router.navigate(['/employer']);
    });
  }


  ngOnInit() {

    this.employerService.getBranchList().subscribe(
      data => this.branchList = data
    )
    if (this.employer.employerID !== undefined) {
      this.employerService
        .getEmployer(this.employer.employerID)
        .subscribe(t => {
          this.employer = t;
        });
    }
    else {
      this.employer.employerID = 0;
      this.name = '';
      this.email = '';
      this.address = '';
      this.joiningDate = '';
      this.isActive = '';
      this.branchID = 0;
    }
  }

  submit() {
    if (this.employer.employerID != 0) {
      this.employerService.update(this.employer, this.employer.employerID)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/employer'])
        });
    }
    else {
      console.log(this.employer);
      this.employerService.create(this.employer)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/employer'])
        });
    }
  }

}

