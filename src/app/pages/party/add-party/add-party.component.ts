import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.scss']
})

export class AddPartyComponent {
constructor(
private location : Location , 
private router : Router , 
){}

goToBack(){
  this.location.back()
}


}
