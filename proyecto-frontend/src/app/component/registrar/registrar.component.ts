import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})



export class RegistrarComponent implements OnInit {
  regio:string ='';
  regio2:boolean = false;
  orden:any = {
    nombre: '',
    segundo_nombre: '',
    apellido: '',
    segundo_apellido: '',
    contrasenia: '',
    fecha_nacimiento:[ {
      dia: '',
      mes:'',
      anio:''
    }]
}
  
  ordenes:any=[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:4100/usuario')
    .subscribe(res=>{
      this.ordenes= res;
      console.log(this.ordenes);
   });
  }
    guardar(){
    this.httpClient.post('http://localhost:4100/usuario', this.orden)
    .subscribe((res:any)=>{
      console.log(res);
      //this.ordenes.push(res);
      this.regio = 'acceso';
      this.regio2 = true;
    });
    
    }

}
