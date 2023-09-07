import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPartyComponent } from './add-party/add-party.component';
import { EditPartyComponent } from './edit-party/edit-party.component';
import { PartyRoutingModule } from './party-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MyRoutingModule } from '../../party-routing.module';



@NgModule({
  declarations: [
    AddPartyComponent,
    EditPartyComponent
  ],
  imports: [
    CommonModule,
    PartyRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PartyModule { }
