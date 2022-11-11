import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  //Local
  Heroes:any=[];

  constructor( private _Heroe:ConsultasService) { }

  ngOnInit(): void {
 //Llenar variable local
this.Heroes =this. _Heroe.GetHeroes();
// Mostrar
   console.log (this.Heroes); 
    
  }

}
