import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/core';

import { ShellComponent } from './shell.component';

export class Shellservice {
  static childRoutes (routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      data: { reuse : true, breadcrumb: 'Dashboard' }
    }
  }  
}
