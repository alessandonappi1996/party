import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyComponent } from './pages/party/party.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';


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
  { path: 'registrazione' , component: RegistrazioneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
