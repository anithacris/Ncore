import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TdmaddComponent } from './tdmmenu/tdmadd/tdmadd.component';
import { TdmmodifyComponent } from './tdmmenu/tdmmodify/tdmmodify.component';
const routes: Routes = [
  { path: '', redirectTo: 'app',pathMatch: 'full' },
  //{ path: 'app', component: AppComponent},
  { path: 'tdmadd', component: TdmaddComponent},
  { path: 'tdmmodify', component: TdmmodifyComponent},
  
  
 //children: [
 //{ path: '', redirectTo: '/tdmadd', pathMatch: 'full'},
  // { path: 'tdmadd', component: TdmaddComponent},
 //]
//}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
