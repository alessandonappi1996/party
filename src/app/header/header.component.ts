import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logged : boolean = false

  constructor(){}

  ngOnInit (): void {
    let admin = localStorage.getItem('seiAdminn')
    console.log(admin);
    
    if(admin){
      
      this.logged = true
    }
  }
}
