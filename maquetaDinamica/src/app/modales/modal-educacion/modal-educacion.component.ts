import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private sEstudio: EstudioService) { 
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      estudio:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['',[Validators.required]],
      imagen:[''],
      url:[''],
      institucion:[''],
      personaid:[1],
   })
  }

  ngOnInit(): void {
  }

  get Estudio(){
    return this.form.get("estudio");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
  

  onCreate(): void{
      this.sEstudio.save(this.form.value).subscribe(data=>{
      alert("Estudio Añadido");
      window.location.reload();
    });
  }

  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      //metodos
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
