import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { EmpoyeeHomeComponent } from './empoyee-home/empoyee-home.component';
import {EmployeeDataService} from './DataService/DataService'
import {HeaderInterceptor} from './Interceptors/HeaderInterceptor'
import {ResponseInterceptor} from './Interceptors/ResponseInterceptor'
@NgModule({
  declarations: [
    AppComponent,
    EmpoyeeHomeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [EmployeeDataService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    {provide:HTTP_INTERCEPTORS,useClass:ResponseInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
