import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppComponent } from './app.component';
import { TokenComponent } from './token/token.component';
import { MyMaterialComponentsModule } from './my-material-components/my-material-components.module';
//import { CommonservicesService } from './commonservices.service';
//import { TdmmainComponent } from './tdmmain/tdmmain.component';
import { TdmaddComponent } from './tdmmenu/tdmadd/tdmadd.component';
//import { TdmmenuComponent } from './tdmmenu/tdmmenu/tdmmenu.component';
import { AppRoutingModule } from  './app-routing.module';
import { TdmmenuModule } from './tdmmenu/tdmmenu.module';

@NgModule({
  declarations: [
    AppComponent,
   
      ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    MyMaterialComponentsModule,FormsModule,
    ReactiveFormsModule,AppRoutingModule,TdmmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

