import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  private ObtenerURL = "http://localhost:8080/v0/api/test/get";
  private ObtenerUnaURL = "http://localhost:8080/v0/api/test/id";
  private AñadirURL = "http://localhost:8080/v0/api/test/add";
  private BorrarURL = "http://localhost:8080/v0/api/test/delete";
  private ActualizarURL = "http://localhost:8080/v0/api/test/update";

  private RutaJSON = "http://localhost:3000/persona";
 

  constructor( private http:HttpClient) {}

  contador: number;

  @Output()
  notificacion : EventEmitter<number> = new EventEmitter<number>();

  setNotificacion(n : number){
    this.contador = n++;
    this.EmitirNotificacion();
  }

  EmitirNotificacion(){
    this.notificacion.emit(this.contador);
  }

  //Obtener personas
  ObtenerPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.RutaJSON);
  }

  //Crear nueva persona
  add(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.RutaJSON,persona);
  }

  //Obtener una única persona
  get(id:string):Observable<Persona>{
    return this.http.get<Persona>(this.RutaJSON + '/' + id);
  }

  //Borrar Persona
  delete(id:string):Observable<Persona>{
    return this.http.delete<Persona>(this.RutaJSON + '/' + id);
  }

  //Actualizar persona
  update(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.RutaJSON, persona);
  }

}
