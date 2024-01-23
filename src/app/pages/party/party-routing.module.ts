import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PartyComponent } from './party.component';
import { AddPartyComponent } from './add-party/add-party.component';
import { EditPartyComponent } from './edit-party/edit-party.component';
import { RegistrazioneComponent } from '../registrazione/registrazione.component';
import { ProfiloComponent } from '../profilo/profilo.component';
import { LoginComponent } from '../login/login.component';
// import { EditPartyComponent } from './edit-party/edit-party.component';
const routes : Routes = [


  {
      path:'',
      data: {
        title: 'partyyyy',
      },
      children: [
          {
              path:'',
              component: PartyComponent,
              // canActivate:[AuthGuard],
              data: {
                title: 'Serate',
              //   role:['USER_ADMIN', 'superuser'],
              }
            },
      
        {
          path:'add-party',
          component: AddPartyComponent,
          // canActivate:[AuthGuard],
          data: {
            title: 'Aggiungi Serata',
          //   role:['USER_ADMIN', 'superuser'],
          }
        },
        {
          path:'edit-party/:id',
          component: EditPartyComponent,
          // canActivate:[AuthGuard],
          data: {
            title: 'Modifica Serata',
          //   role:['USER_ADMIN', 'superuser'],
          }
        },

        { path: 'registrazione' , component: RegistrazioneComponent},
        { path: 'profilo' , component: ProfiloComponent},
        { path: 'login' , component: LoginComponent }

        // {
        //   path:'edit-party/:id',
        //   component: EditPartyComponent,
        //   // canActivate:[AuthGuard],
        //   data: {
        //     title: 'Modifica Serata',
        //   //   role:['USER_ADMIN', 'superuser'],
        //   }
        // },


]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyRoutingModule { }
