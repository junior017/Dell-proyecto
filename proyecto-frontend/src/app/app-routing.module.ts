import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component'
import { LoguinComponent } from './component/loguin/loguin.component'

const routes: Routes = [
{path:'header',
 component: HeaderComponent
},
{path:'loguin',
 component: LoguinComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
