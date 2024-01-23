import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PartyService } from 'src/app/service/party.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent {

  partys : any
  close : boolean = true
  logged : boolean = false

  public token =[1,2,3,4,5,6,7,8,9,10,'a','b','c']

  constructor(
    private router: Router,
    private location : Location,
    private fireBaseSrv : PartyService,
    
  ){}

ngOnInit (): void {
this.getParty()
let admin = localStorage.getItem('seiAdminn')
if(admin){
  this.logged = true 
  console.warn('funziona?????');
  
}
// const random = Math.floor(Math.random() * this.token.length)
// console.log(random , 'random' , this.token[random] ,'token random');
this.shuffle()
console.log(this.token);

}

shuffle() {
  let currentIndex = this.token.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [this.token[currentIndex], this.token[randomIndex]] = [
      this.token[randomIndex], this.token[currentIndex]];
  }

  // return this.token;
}

// Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);


arrProva : any = []
getParty(){
  this.fireBaseSrv.getParty().subscribe(data=>{
    console.log(data , 'getparty');

this.arrProva.push(data)

console.log(this.arrProva);

this.partys = Object.keys(data).map((key)=>{
  console.log(key);
  data[key]['id']= key
  return data[key]})
    
    console.log(this.partys , 'getpartys con key');
    
    
  })
}


deleteParty(id:any){
  Swal.fire({
    title: 'Sei sicuro di voler eliminare?',
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: 'Conferma',
    denyButtonText: `Indietro`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.fireBaseSrv.deleteParty(id).subscribe(data=>{
        console.log(id);
        
        console.log(data);
        if (data==null){
          Swal.fire('Eliminato!', '', 'success')
          this.getParty()
        }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Qualcosa è andato storto, elemento non eliminato',
              // footer: '<a href="">Why do I have this issue?</a>'
            })
          }
      })
      
    } 
  })


}


goToAdd(){
  this.router.navigate(['party/add-party'])
}

goToEdit(id:any){
this.router.navigate(['party/edit-party/' + id])
}

goToBack() {
  this.location.back();
}


closeDrop(){
 this.close = !this.close
 console.log(this.close);
 
}

goToRegistraz(){
  this.router.navigate(['/registrazione'])
}


}
