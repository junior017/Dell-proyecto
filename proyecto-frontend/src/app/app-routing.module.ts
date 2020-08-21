import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component'
import { LoguinComponent } from './component/loguin/loguin.component'
import { EditorComponent } from './component/editor/editor.component'
import { AuthGuard } from './auth.guard'
import { from } from 'rxjs';
const routes: Routes = [

{path:'editor',
 component: EditorComponent,
 canActivate: [ AuthGuard ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
