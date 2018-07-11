import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialComponentsModule } from '../my-material-components/my-material-components.module';
import { AppRoutingModule } from '../app-routing.module';
//import { TdmmenuModule } from '../tdmmenu/tdmmenu.module';
//import { TdmmenuComponent } from './tdmmenu/tdmmenu.component';
import { TdmaddComponent } from './tdmadd/tdmadd.component';
import { TdmmodifyComponent } from './tdmmodify/tdmmodify.component';


@NgModule({
  imports: [
    CommonModule,
    MyMaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [],
  declarations: [TdmaddComponent,TdmmodifyComponent]
})

export class TdmmenuModule { }
