import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit{
trabajitos:any=[]; //instanciamos las variables para usarlas en el metedo ngOnInit
nombrecito:string='';
  constructor(private datos:DatosService){ }
  ngOnInit(): void{
    this.datos.getDatos().subscribe(data =>{
      this.trabajitos=data.trabajos;
      this.nombrecito=data.nombre;
    })
  }

}
