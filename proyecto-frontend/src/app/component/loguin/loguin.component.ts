import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit {
  @Output() onContenido = new EventEmitter();
  orden:any = {
    nombre: '',
    contrasenia: ''
}
 
ordenes:any=[];
  constructor(private httpClient:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
  }
 

  singIn(){
    this.httpClient.post('http://localhost:4100/loguin', this.orden)
    .subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/header']);
    },
    (err:any) => {console.log(err);
     });
    
  }

}
