import { Component, OnInit } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor';
import { CargarScriptsService } from '../../cargar-scripts.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor( private _CargarScripts:CargarScriptsService) { 
    _CargarScripts.carga(["edi/edi"]);  
  } 
  pluma:any=[];
  ngOnInit(): void {
  }

}
