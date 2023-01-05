import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-modal-agregar-exp',
  templateUrl: './modal-agregar-exp.component.html',
  styleUrls: ['./modal-agregar-exp.component.css']
})
export class ModalAgregarExpComponent implements OnInit {
    form: FormGroup;
    puesto:string="";
    empresa:string="";
    inicio:string="";
    fin:string="";
    descripcion:string="";
    imagen:string="";
    url:string="";
    esTrabajoActual:boolean=false;
    personaid:number=1;

  constructor(private readonly fb: FormBuilder,private expServ: ExperienciaService) 
  {
    this.form= this.fb.group({
      puesto:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['',[Validators.required]],
      imagen:[''],
      url:[''],
      empresa:[''],
      esTrabajoActual :[''],     
      personaid:[1],
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
    this.expServ.crear(this.form.value).subscribe(data=>{alert("Experiencia Añadida")
    window.location.reload();
  });
}

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