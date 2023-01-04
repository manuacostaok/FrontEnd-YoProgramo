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
  idEditar : number | undefined;

constructor(private servExp:ExperienciaService){}
  ngOnInit(): void {
    this.cargarExperiencia();
  }

  public cargarExperiencia():void{
    this.servExp.lista().subscribe(data =>(this.experiencias=data));
  }

  idEdit(id:number){
    this.idEditar=id
  }

  delete(id:number){
    if(id!=undefined){
      this.servExp.borrar(id).subscribe(
        data=>{
          this.cargarExperiencia();
        },err=>{
          alert("no se pudo eliminar la experiencia")
        })

      }
  }
}

