import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PartyService } from 'src/app/service/party.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {

form!: FormGroup;


constructor(
  private fb : FormBuilder,
  private fireBaseSrv : PartyService
){}


ngOnInit (): void {
this.form = this.fb.group({
  email: [''],
  password: ['']
})

}




registra(){
  this.fireBaseSrv.addUtente(this.form.value).subscribe(data=>{
    console.log(data);
    
  })
}

}
