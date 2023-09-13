import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PartyService } from 'src/app/service/party.service';

@Component({
  selector: 'app-edit-party',
  templateUrl: './edit-party.component.html',
  styleUrls: ['./edit-party.component.scss']
})
export class EditPartyComponent {

form!: FormGroup
idParty: any

  constructor(
    private route: ActivatedRoute, 
    private fb : FormBuilder , 
    private router : Router , 
    private location : Location,
    private fireBaseSrv : PartyService
  ){
    this.form = this.fb.group({
      nomeSerata: [''],
      durata: ['']
    })
  }

ngOnInit(): void {
this.idParty = this.route.snapshot.paramMap.get('id');
this.getPartySingolo()
}

getPartySingolo(){ //qua non mettiamo id nella parentesi tonda , quando si fa mmm
this.fireBaseSrv.getPartyById(this.idParty).subscribe(data=>{
  console.log(data);

  this.form.patchValue(data)                                       //vedi se vabene metterlo qui nel metodo di getbyid invece di farne uno a parte come in cityreport mmm
  
})
}

editSerata(){
this.fireBaseSrv.editParty(this.idParty , this.form.value).subscribe(data=>{
console.log(data);


})
setTimeout(() => {
  this.router.navigate(['/party'])
}, 500);
}

goToBack(){
  this.location.back()
}
}
