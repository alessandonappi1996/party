import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent {
  constructor(
    private router: Router,
    private location : Location
  ){}
goToAdd(){
  this.router.navigate(['party/add-party'])
}


goToBack() {
  this.location.back();
}


}
