import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'creator', loadChildren: () => import('./creator/creator.module').then(m => m.CreatorModule) },
  { path: 'space-owner', loadChildren: () => import('./space-owner/space-owner.module').then(m => m.SpaceOwnerModule) },
  { path: '**', redirectTo: '/space-owner' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled'
  })], exports: [RouterModule]
})
export class AppRoutingModule { }
