import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BranchFormComponent } from './components/branch-form/branch-form.component';
import { BranchListComponent } from './components/branch-list/branch-list.component';

import { BranchService } from './services/branch.service';
import { HttpModule } from '@angular/http';
import { EmployerFormComponent } from './components/employer-form/employer-form.component';
import { EmployerListComponent } from './components/employer-list/employer-list.component';
import { EmployerService } from './services/employer.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BranchFormComponent,
    BranchListComponent,
    EmployerFormComponent,
    EmployerListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,

    HttpModule,

    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },

      { path: 'branch/new', component: BranchFormComponent },
      { path: 'branch/:id', component: BranchFormComponent },
      { path: 'branch', component: BranchListComponent },

      { path: 'employer/new', component: EmployerFormComponent },
      { path: 'employer/:id', component: EmployerFormComponent },
      { path: 'employer', component: EmployerListComponent },
    ])
  ],
  providers: [BranchService, EmployerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
