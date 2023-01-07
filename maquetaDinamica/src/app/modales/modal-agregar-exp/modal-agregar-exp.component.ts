import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-modal-agregar-exp',
  templateUrl: './modal-agregar-exp.component.html',
  styleUrls: ['./modal-agregar-exp.component.css']
})
export class ModalAgregarExpComponent implements OnInit {
  form:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService) {
     //Creamos el grupo de controles para el formulario 
     this.form= this.formBuilder.group({
      puesto:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['',[Validators.required]],
      imagen:[''],
      url:[''],
      empresa:[''],
      esTrabajoActual :[''],     
      personaId:[1],
   })
   }

  ngOnInit(): void {
  }

  get Puesto(){
    return this.form.get("puesto");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
  onCreate(): void{
      this.sExperiencia.crear(this.form.value).subscribe(
        data=>{
          window.location.reload();
          alert("Experiencia Añadida")
    });
  }

  //, err =>{
  //  alert("no se pudo eliminar la experiencia")
  //}
  
  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
}