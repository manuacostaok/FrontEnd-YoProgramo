import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-modal-editar-sobre-mi',
  templateUrl: './modal-editar-sobre-mi.component.html',
  styleUrls: ['./modal-editar-sobre-mi.component.css']
})
export class ModalEditarSobreMiComponent implements OnInit{
  form:FormGroup;
  perso:Persona;
  constructor(private formBuilder: FormBuilder,
              private sPersona:PersonaService,
              private activatedRoute:ActivatedRoute,
              private router:Router
    ) {
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      img:['',[Validators.required]],
      banner:['',[Validators.required]],
      sobreMi:['',[Validators.required]],
      titulo:['',[Validators.required]],
   })
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id2'];
    this.sPersona.detail(1).subscribe(data => {
      this.perso=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Apellido(){
    return this.form.get("apellido");
  }

  get Titulo(){
    return this.form.get("titulo");
  }
  get Img(){
    return this.form.get("img");
  }

  get Banner(){
    return this.form.get("banner");
  }

  get SobreMi(){
    return this.form.get("sobreMi");
  }

  onUpdate():void{
    this.sPersona.edit(this.form.value).subscribe(data => {
      alert("Persona modificada.");
      this.router.navigate(['']);
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
