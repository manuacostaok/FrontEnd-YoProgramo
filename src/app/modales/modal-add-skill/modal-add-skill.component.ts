import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/entidades/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-add-skill',
  templateUrl: './modal-add-skill.component.html',
  styleUrls: ['./modal-add-skill.component.css']
})
export class ModalAddSkillComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private sHabilidad:HabilidadService) { 

//Creamos el grupo de controles para el formulario 
this.form= this.formBuilder.group({
  habilidad:['',[Validators.required]],  
  porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],  
  personaid:[1],
})
}
  ngOnInit(): void {
  }
  //declarar para los campos
  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

 

  onCreate(): void{
      this.sHabilidad.save(this.form.value).subscribe(data=>{
      alert("Habilidad Añadida");
      window.location.reload();
    });
  }

  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }


}
