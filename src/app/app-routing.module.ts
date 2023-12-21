import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: `https://retailgear-expo.vercel.app/customers.js`,
        remoteName: 'customers',
        exposedModule: './CustomersModule',
      }).then((module) => module.CustomersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
