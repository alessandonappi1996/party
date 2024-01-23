import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup
  admin: any;
  nomeAdmin: any;
  email: any;
  adminSingolo: any;
  password: any;
  seiAdmin: boolean = false;
  passa!: string;

  constructor(
    private loginSrv: LoginService,
    private fb : FormBuilder
    ){}

  ngOnInit (): void{
this.getAdmin()

this.form = this.fb.group({
  email: [''],
  password: ['']
})

  }

  getAdmin(){
    this.loginSrv.getAdmin().subscribe(data=>{
      console.log(data);

      this.admin = Object.keys(data).map((key)=>{
        console.log(key);
        data[key]['id']= key
        return data[key]})
          
          console.log(this.admin , 'getpartys con key');
      // this.admin = data
  
    // console.log(this.emailona);
      
    })
    
  }


  logga(){
    for (let index = 0; index < this.admin.length; index++) {
      this.adminSingolo = this.admin[index];
     this.email = this.adminSingolo.email
     this.password = this.adminSingolo.password
     console.log(this.email);
     
     if(this.form.value.email==this.email  && this.form.value.password == this.password){
this.seiAdmin = true
       this.passa= 'sei loggato'

localStorage.setItem('seiAdminn', this.passa);

     } 
     console.log(this.form.value.email);
     
    }
    // console.log(this.adminSingolo);
    console.log(this.seiAdmin);
    
  }
}
