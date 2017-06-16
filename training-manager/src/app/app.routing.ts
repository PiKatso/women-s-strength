import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVolunteerComponent } from './list-volunteer/list-volunteer.component';
import { AdminComponent } from './admin/admin.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListVolunteerComponent
  },{
    path: 'admin',
    component: AdminComponent
  },{
    path: 'projects/:id',
    component: VolunteerDetailComponent
  },{
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
