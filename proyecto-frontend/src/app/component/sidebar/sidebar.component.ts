import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faArchive } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
  
})
export class SidebarComponent implements OnInit {
  faArchive = faArchive;
  @Output() onContenido = new EventEmitter();
  
  verSeccion(){
    this.onContenido.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
