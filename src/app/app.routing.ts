import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

import { UploadComponent } from './views/upload/upload.component';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { UserComponent } from './views/user/user.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'CUB'
    },
    children: [
      {
        path: 'manage',
        data: {
          title: 'Manage BoK Versions'
        },
        component: UploadComponent
      },
      {
        path: 'user',
        data: {
          title: 'User Details'
        },
        component: UserComponent
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
