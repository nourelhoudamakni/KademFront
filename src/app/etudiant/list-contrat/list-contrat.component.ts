import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
//////routage 
  GoToAddContrat()
  {
    this.route.navigate(['etudiant/AddContrat']);
  }
//////////

}
