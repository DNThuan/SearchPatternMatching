import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routesConfig: Routes=[
  {path:'',component:DisplayComponent},
  {path:'kmp',component:KmpComponent},
  {path:'rabinkarp',component:RabinkarpComponent}
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KmpComponent } from './kmp/kmp.component';
import { RabinkarpComponent } from './rabinkarp/rabinkarp.component';
import { DisplayComponent } from './display/display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

  
@NgModule({
  declarations: [
    AppComponent,
    KmpComponent,
    RabinkarpComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routesConfig),
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
