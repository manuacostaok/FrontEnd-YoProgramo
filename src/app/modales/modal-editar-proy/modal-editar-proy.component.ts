import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/entidades/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-editar-proy',
  templateUrl: './modal-editar-proy.component.html',
  styleUrls: ['./modal-editar-proy.component.css']
})
export class ModalEditarProyComponent implements OnInit{
  form:FormGroup;
  proye :Proyecto = null;
  constructor(private formBuilder: FormBuilder, 
              private sProye:ProyectoService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private cd:ChangeDetectorRef
  ) { 
    //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      proyecto:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['',[Validators.required]],
      imagen:[''],
      url:[''],
      personaid:[1],
   })
  }
  get Proyecto(){
    return this.form.get("proyecto");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  get ProyectoValid(){
    return this.Proyecto.touched && !this.Proyecto.valid;
  }

  get DescripcionValid() {
    return this.Descripcion.touched && !this.Descripcion.valid;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProye.detail(id).subscribe(data => {
      this.proye=data;
      this.cd.detectChanges();
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate():void{
    this.sProye.edit(this.form.value).subscribe(data => {
      alert("Proyecto modificado.");
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
