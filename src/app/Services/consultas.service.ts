import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private Heroes:any=[
  
    {
      nombre:"Batman",
      biografia: " Su habilidad se resume en dinero y equipamento.",
      imagen:"assets/img/batman.png",
      Fecha: "1941",
      Universo:"DC"
    },

    {
      nombre:"Wolverine",
      biografia: "Regenerativas y garras de adamantium. ",
      imagen:"assets/img/wolverine.png",
      Fecha: "1974",
      Universo:"Marvel"
    },

    {
      nombre:"Spiderman",
      biografia: " Super fuerza, telaranas radioactivas",
      imagen:"assets/img/spiderman.png",
      Fecha: "1962",
      Universo:"Marvel"
    } 

  ]

  constructor() { 

  }

  GetHeroes():void{
    return this.Heroes;
  }






   LLamaraBryan(){

    console.log("Llamando a Bryan...")

  }

  LlamaraWarnert(){
    
    console.log("Llamando a Warner...")


  } 


} 
