import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../models/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  
  url='http://localhost:8089/Contrat/'

  constructor(private http:HttpClient) { }

  getAllContrat():Observable<Contrat[]>
  {
   return  this.http.get<Contrat[]>(this.url+"getAllContrat");
  }


  deleteContrat(id:number)
  {
    return this.http.delete(this.url+"deleteContrat"+'/'+id)
  }
  
  addContrat(idEtudiant:number,contrat:Contrat):Observable<Contrat>
  {
    return this.http.post<Contrat>(this.url+"AddEtudiantToContratwithId"+"/"+idEtudiant,contrat);
  }


  updateContrat(idContrat:number,contrat:Contrat):Observable<Contrat>
  {
    return this.http.put<Contrat>(this.url+"upadateContrat"+"/"+idContrat,contrat);
  }


  getContratByIDetudiant(idEtud:number):Observable<Contrat[]>
  {
    return  this.http.get<Contrat[]>(this.url+"getContratByidEtudiant"+"/"+idEtud);
  }

}
