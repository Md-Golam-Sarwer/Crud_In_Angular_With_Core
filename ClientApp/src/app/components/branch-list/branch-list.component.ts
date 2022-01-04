import { Component, OnInit } from '@angular/core';

import { BranchService } from './../../services/branch.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
  branches: any[];

  constructor(private router: Router, private branchService: BranchService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.branchService.getBranches().subscribe(branches => this.branches = branches);
  }

  delete(id: any) {
    if (confirm("Are You Sure??")) {
      console.log(id);
      this.branchService.delete(id).subscribe(x => {
        console.log(x), this.refreshData();
      });
    }
  }

}
