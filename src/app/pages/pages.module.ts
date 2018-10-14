import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

import { SharedModule } from './../shared/shared.module';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PagesModule { }
