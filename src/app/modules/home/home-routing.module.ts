import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'carriers',
    loadChildren: () =>
      import('@modules/carrier/carrier.module').then((m) => m.CarrierModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'clientes',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
