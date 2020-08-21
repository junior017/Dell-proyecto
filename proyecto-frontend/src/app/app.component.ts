import { Component } from '@angular/core';
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
  faArchive = faArchive;
 
  constructor(private router:Router){}

  region:string = 'abrir';
  verSeccion(){
    this.region = 'abrir';
  }
  verOtra(){
    this.region = 'abrir2';
  }
  verOtra2(){
    this.region = 'abrir3';
  }
  verOtra3(){
    this.region='autorizado'
    this.router.navigate(['/editor'])
  }
  verOtra9(){
    this.region = 'x';
  }
  logout(){
    localStorage.removeItem('token')
  }
  loggI(){
    return !!localStorage.getItem("token");
   }
}
