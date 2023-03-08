import { Injectable } from '@angular/core';
//Suscribe los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//Hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
                      //http = alias hace referencia a la herramienta del HttpClient que importamos para usar 
  constructor(private http:HttpClient) { }
  
  //metodo observable que devuelve los datos 
  getDatos():Observable<any>{
        return this.http.get('./assets/db/datos.json');
      }
}
