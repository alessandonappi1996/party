import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
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
  private fireBaseSrv : PartyService,
  private loginSrv : LoginService
){}


ngOnInit (): void {


this.getAdmin()

this.form = this.fb.group({
  nome: [''],
  cognome: [''],
  email: [''],
  password: ['']
})

}




registra(){
  this.fireBaseSrv.addUtente(this.form.value).subscribe(data=>{
    console.log(data);
    
  })
}

getAdmin(){
  this.loginSrv.getAdmin().subscribe(data=>{
    console.log(data);
    
  })
}

}
