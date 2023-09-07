import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder , FormGroup} from '@angular/forms';
import { PartyService } from 'src/app/service/party.service';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.scss']
})

export class AddPartyComponent {

  form!: FormGroup;


constructor(
private location : Location , 
private router : Router ,
private fb : FormBuilder ,
private fireBaseSrv : PartyService
){}



ngOnInit (): void{
this.form = this.fb.group ({
  nomeSerata: [''] , 
  durata : ['']
})
}

addSerata(){
  this.fireBaseSrv.addParty(this.form.value).subscribe(data=>{
    console.log(data);
    console.log(this.form.value);
    
  })
  setTimeout(() => {
    this.router.navigate(['/party'])
  }, 500);
  
  
}


goToBack(){
  this.location.back()
}


}
