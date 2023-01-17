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
   this.cargarRed();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarRed():void{
    this.sRed.lista().subscribe(data => {
      this.redes=data});
  }
  delete(id:number){
    if(id != undefined){
      this.sRed.delete(id).subscribe(
        data =>{
          alert("Red eliminado correctamente")
          this.cargarRed();
        }, err =>{
          alert("no se pudo eliminar la Red")
        })
    }}


}
