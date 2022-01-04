import { Component, OnInit } from '@angular/core';
import { EmployerService } from './../../services/employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {
  employers: any[];
  constructor(private router: Router, private employerService: EmployerService) { }

  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.employerService.getEmployers().subscribe(employers => this.employers = employers);

  }
  delete(id) {
    if (confirm("Do you want to delete Employer with ID : " + id)) {
      console.log(id);
      this.employerService.delete(id).subscribe(x => {
        console.log(x), this.refreshData();
      });
    }
  }


}



