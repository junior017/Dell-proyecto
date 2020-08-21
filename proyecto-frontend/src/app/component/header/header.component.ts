import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  faArchive = faArchive;
  
  @Output() onContenido = new EventEmitter();
  @Output() onContenido2 = new EventEmitter();
  @Output() onContenido3 = new EventEmitter();
  @Output() onContenido7 = new EventEmitter();
  @Output() onContenido8 = new EventEmitter();
  @Output() onContenido4 = new EventEmitter();
 

  verSeccion(){
    this.onContenido.emit();
  }
  verOtra(){
    this.onContenido2.emit();
  }

  verOtra2(){
    this.onContenido3.emit();
  }
  logout(){
    this.onContenido7.emit();
  }
  loggI(){
    return !!localStorage.getItem("token");
   }
  
  constructor(private router:Router) { }
  verO(){
   this.router.navigate(['/editor']) 
  }
  ngOnInit(): void {
  }

}
