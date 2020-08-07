import { Component } from '@angular/core';
import { faArchive } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
  faArchive = faArchive;

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
}
