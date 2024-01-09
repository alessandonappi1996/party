import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder , FormGroup} from '@angular/forms';
import { PartyService } from 'src/app/service/party.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.scss']
})

export class AddPartyComponent {

  form!: FormGroup;
public settimana = [
  {
giornoS : 'Lunedì'
  },
  {
    giornoS : 'Martedì'
  },
  {
    giornoS : 'Mercoledì'
  },
  {
    giornoS : 'Giovedì'
  },
  {
    giornoS : 'Venerdì'
  },
  {
    giornoS : 'Sabato'
  },
  {
    giornoS : 'Domenica'
  }
]

constructor(
private location : Location , 
private router : Router ,
private fb : FormBuilder ,
private fireBaseSrv : PartyService
){}



ngOnInit (): void{
this.form = this.fb.group ({
  nomeSerata: [''] , 
  oraInizio : [''],
  oraFine : [''],
  // durata : [''], 
  giorno : ['']
})
}

addSerata(){
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.fireBaseSrv.addParty(this.form.value).subscribe(data=>{
        console.log(data);
        console.log(this.form.value);
        
      })
      Swal.fire('Saved!', '', 'success')
      setTimeout(() => {
        this.router.navigate(["/party"])
      }, 1000);
      
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
 

  
  
}


goToBack(){
  this.location.back()
}


}
