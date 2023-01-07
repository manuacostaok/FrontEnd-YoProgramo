import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencias: Experiencia[]=[];

constructor(private servExp:ExperienciaService){}
  ngOnInit(): void {
    this.cargarExperiencia();
  }

  
  cargarExperiencia():void{
    this.servExp.lista().subscribe(data => {this.experiencias=data});    
  }


  delete(id:number){
    if(id != undefined){
      this.servExp.borrar(id).subscribe(
        data =>{
          alert("Experiencia eliminada correctamente")
          this.cargarExperiencia();
        }, err =>{
          alert("no se pudo eliminar la experiencia")
        })
    }}
  
}

