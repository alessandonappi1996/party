import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ; 
import { environment } from 'src/environments/environment';



const urlFireBase = 'https://allenamento-49561-default-rtdb.europe-west1.firebasedatabase.app/'


@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor(private http : HttpClient ) { }


  addParty(party:any){
    return this.http.post<any>(`${environment.apiUrl}/party.json`, party)

  }

  getParty(){
    return this.http.get<any>(`${environment.apiUrl}/party.json`)
  }

  deleteParty(id:any){
return this.http.delete<any>(`${environment.apiUrl}/party/${id}.json` )
  }

  editParty(id:any , party:any){
    return this.http.put<any>(`${environment.apiUrl}/party/${id}.json` , party)
  }

  getPartyById(id: any){
    return this.http.get<any>(`${environment.apiUrl}/party/${id}.json`)
  }

  addUtente(utente: any){
    return this.http.post<any>(`${environment.apiUrl}/utente.json`, utente)
  }
}












// gli headers sono delle firme aggiuntive , dei metadati che aggiungiamo alla nostra richiesta dove diciamo varie cose , ad esempio i tipi di dati che passiamo che possono essere di tipo json , sono una serie di aggiunde che aiuta la nostra chiamata ad essere più specifica . nell headers quindi diciamo il tipo di dato che passiamo 