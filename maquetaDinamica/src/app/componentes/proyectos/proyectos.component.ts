import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/entidades/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { VERSION, ViewChild, ElementRef } from "@angular/core"; 


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos : Proyecto[]=[];
  
  constructor( private sproye:ProyectoService) { }

  
  ngOnInit(): void {
    this.cargarProyecto();
    
  }

  cargarProyecto():void{
    this.sproye.lista().subscribe(data => {
      this.proyectos=data
    });    
  }

  

  delete(id:number){
    if(id != undefined){
      this.sproye.delete(id).subscribe(
        data =>{
          alert("Proyecto eliminado correctamente")
          this.cargarProyecto();
        }, err =>{
          alert("no se pudo eliminar el proyecto")
        })
    }}    
}