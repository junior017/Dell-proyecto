import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { UserI } from '../../models/user'
import { AuthService } from '../../services/auth.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit {
  region: string = '';
  @Output() onContenido4 = new EventEmitter();
  orden:any = {
    nombre: '',
    contrasenia: ''
}
verOtra3(){
  this.onContenido4.emit();
}
estilo:string='';
ordenes:any=[];
  constructor(private httpClient:HttpClient,
    private router:Router, private AuthService: AuthService) { }

  ngOnInit(): void {
  }

 singIn(form){
  this.AuthService.singI(form.value).subscribe(res=>{
    console.log(res)
     localStorage.setItem('token', res.token);
     this.router.navigate(['/editor'])
     this.region='autorizado'
    //console.log('hpls');
  }, err=>{
    this.estilo='advert';
   console.log(err)
  }

  )
 }
 logout(){
  localStorage.removeItem('token')
}
  /*singI(){
    this.httpClient.post('http://localhost:4100/loguin', this.orden)
    .subscribe((res: any)=>{
      console.log(res);
      this.regio = 'acceso';
      
    },
    (err:any) => {console.log(err);
     });
  }*/

}
