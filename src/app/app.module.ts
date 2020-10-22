import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListOfFormsComponent } from './components/list-of-forms/list-of-forms.component';
import { FormsModule } from '@angular/forms';
import { AddVisaFormComponent } from './components/add-visa-form/add-visa-form.component';
import {RouterModule,Routes} from "@angular/router"
const router : Routes=[
  {path:'forms',component:ListOfFormsComponent},
 {path:'addVisaForm',component:AddVisaFormComponent},
{path:'',redirectTo:'/forms',pathMatch:'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    ListOfFormsComponent,
    AddVisaFormComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
