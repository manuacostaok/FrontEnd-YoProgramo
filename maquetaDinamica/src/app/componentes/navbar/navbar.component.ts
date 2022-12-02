import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    
  redes:any;
  mostrar = false;
  constructor(private datos: DatosService){}
  ngOnInit():void{
      
      
    }
  

  mostrate():void{
    this.mostrar=!this.mostrar;
  }


}
