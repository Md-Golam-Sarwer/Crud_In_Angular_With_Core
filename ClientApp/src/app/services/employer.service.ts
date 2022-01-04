import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: Http) { }

  create(employer: any) {
    return this.http.post('/api/employers', employer).pipe(map(res => console.log(res.json())));
  }
  getEmployer(id: any) {
    return this.http.get('/api/employers/' + id).pipe(map(res => res.json()));
  }

  update(employer: any, id: any) {
    return this.http.put('/api/employers/' + id, employer).pipe(map(res => res.json()));
  }

  delete(id: any) {
    return this.http.delete('/api/employers/' + id).pipe(map(res => res.json()));
  }

  getEmployers() {
    return this.http.get('/api/employers/').pipe(map(res => res.json()));
  }

  getBranchList() {
    return this.http.get('/api/employers/GetBranchList/')
      .pipe(map(res => res.json()));
  }

}

