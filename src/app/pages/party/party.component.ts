import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PartyService } from 'src/app/service/party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent {

  partys : any

  constructor(
    private router: Router,
    private location : Location,
    private fireBaseSrv : PartyService
  ){}

ngOnInit (): void {
this.getParty()
}


arrProva : any = []
getParty(){
  this.fireBaseSrv.getParty().subscribe(data=>{
    console.log(data);

this.arrProva.push(data)

console.log(this.arrProva);

this.partys = Object.keys(data).map((key)=>{
  console.log(key);
  data[key]['id']= key
  return data[key]})
    
    console.log(this.partys);
    
    
  })
}


deleteParty(id:any){
this.fireBaseSrv.deleteParty(id).subscribe(data=>{
  console.log(id);
  
  console.log(data);
  if(data==null){
this.getParty()
  }
})

}


goToAdd(){
  this.router.navigate(['party/add-party'])
}


goToBack() {
  this.location.back();
}


}
