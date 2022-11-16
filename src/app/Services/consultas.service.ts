import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private Heroes:IHeroe[]=[
  
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

  GetHeroes():IHeroe[]{
    return this.Heroes;
  }

BuscarHeroes(termino:string){
  
  let heroesarr:IHeroe[]=[];
  
  termino=termino.toLocaleLowerCase();
  
  for (let index = 0; index < this.Heroes.length; index++) {
    let Individual = this.Heroes[index]
    let nombre = Individual.nombre.toLocaleLowerCase()
    if(nombre.indexOf(termino)>=0){
      Individual.idx=index;
      heroesarr.push(Individual)

    }
 }
 return heroesarr;
}




   LLamaraBryan(){

    console.log("Llamando a Bryan...")

  }

  LlamaraWarnert(){
    
    console.log("Llamando a Warner...")


  } 


} 

export interface IHeroe{

  nombre: string,
  biografia: string,
  imagen:string,
  Fecha: string,
  Universo:string
  idx?:number

}
