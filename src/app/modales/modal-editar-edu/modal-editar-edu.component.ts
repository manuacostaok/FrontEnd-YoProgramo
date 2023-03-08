import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/entidades/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-modal-editar-edu',
  templateUrl: './modal-editar-edu.component.html',
  styleUrls: ['./modal-editar-edu.component.css']
})
export class ModalEditarEduComponent implements OnInit {form:FormGroup;
  estu:Estudio=null;
  constructor(private formBuilder: FormBuilder, 
              private sEstudio:EstudioService, 
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private cd:ChangeDetectorRef
              ) { 
    //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      estudio:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['', [Validators.required]],
      imagen:[''],
      url:[''],
      institucion:[''],
      personaid:1,
   })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEstudio.detail(id).subscribe(data => {
      this.estu=data;
      this.cd.detectChanges();
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
   }
 
   get Estudio(){
    return this.form.get("estudio");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
 
  onUpdate():void{
    this.sEstudio.edit(this.form.value).subscribe(data => {
      alert("Estudio modificado.");
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