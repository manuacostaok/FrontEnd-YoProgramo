import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/entidades/red';
import { RedService } from 'src/app/servicios/red.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    
  redes :Red[]=[];
  isLogged = false;
  constructor(private tokenService: TokenService, private sRed:RedService) { }

  ngOnInit(): void {
   this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidad():void{
    this.sRed.lista().subscribe(data => {
      this.redes=data});
  }


}
