import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyComponent } from './pages/party/party.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'party'
  },
  { path: 'party',
  // canActivate:[AuthGuard],
  component: PartyComponent,
  data: {
    title:'nessuno',
  }
},
{path: 'party',
  loadChildren: () =>
    import('./pages/party/party.module').then((m) => m.PartyModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
