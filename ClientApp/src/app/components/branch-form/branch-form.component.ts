import { Component, OnInit } from '@angular/core';
import { BranchService } from './../../services/branch.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-event-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  branchID: any;
  branchName: any;
  branchDivision: any;
  branch = { branchID: 0 };
  constructor(private route: ActivatedRoute, private router: Router, private branchService: BranchService) {
    route.params.subscribe(p => {
      this.branch.branchID = p['id'];
    }, err => {
      if (err.status == 404)
        this.router.navigate(['/branch']);
    });
  }
  ngOnInit() {
    if (this.branch.branchID !== undefined) {
      this.branchService
        .getBranch(this.branch.branchID)
        .subscribe(b => {
          this.branch = b;
        });
    }
    else {
      this.branch.branchID = 0;
      this.branchName = '';
      this.branchDivision = '';
    }
  }
  submit() {
    if (this.branch.branchID != 0) {
      this.branchService.update(this.branch, this.branch.branchID)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/branch'])
        });
    }
    else {
      console.log(this.branch);
      this.branchService.create(this.branch)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/branch'])
        });
    }
  }

}
