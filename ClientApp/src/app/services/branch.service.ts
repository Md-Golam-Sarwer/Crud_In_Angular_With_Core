import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class BranchService {

  constructor(private http: Http) { }

  create(branch: any) {
    return this.http.post('/api/branches', branch).pipe(map(res => console.log(res.json())));
  }
  getBranch(id: any) {
    return this.http.get('/api/branches/' + id).pipe(map(res => res.json()));
  }

  update(branch: any, id: any) {
    return this.http.put('/api/branches/' + id, branch).pipe(map(res => res.json()));
  }

  delete(id: any) {
    return this.http.delete('/api/branches/' + id).pipe(map(res => res.json()));
  }

  getBranches() {
    return this.http.get('/api/branches/').pipe(map(res => res.json()));
  }

}
