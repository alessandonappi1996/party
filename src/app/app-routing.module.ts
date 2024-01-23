import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyComponent } from './pages/party/party.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { ProfiloComponent } from './pages/profilo/profilo.component';
import { LoginComponent } from './pages/login/login.component';


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
  { path: 'profilo' , component: ProfiloComponent},
  { path: 'login' , component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
