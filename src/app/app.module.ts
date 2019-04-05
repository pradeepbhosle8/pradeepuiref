import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { routing } from './ui-routing/ui-routing.module';

import { HighlightModule } from 'ngx-highlightjs';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JavascriptComponent } from './codeLanguage/javascript/javascript.component';
import { BootstrapComponent } from './codeLanguage/bootstrap/bootstrap.component';
import { AngularCliComponent } from './codeLanguage/angular-cli/angular-cli.component';
import { JsonComponent } from './codeLanguage/json/json.component';
import { AjaxComponent } from './codeLanguage/ajax/ajax.component';
import { NodeJSComponent } from './codeLanguage/node-js/node-js.component';
import { NodejsapiComponent } from './codeLanguage/json/nodejsapi/nodejsapi.component';
import { SlimphpapiComponent } from './codeLanguage/json/slimphpapi/slimphpapi.component';
import { SassComponent } from './codeLanguage/sass/sass.component';
import { GulpjsComponent } from './codeLanguage/gulpjs/gulpjs.component';
import { ReactjsComponent } from './codeLanguage/reactjs/reactjs.component';
import { VuejsComponent } from './codeLanguage/vuejs/vuejs.component';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JavascriptComponent,
    BootstrapComponent,
    AngularCliComponent,
    JsonComponent,
    AjaxComponent,
    NodeJSComponent,
    NodejsapiComponent,
    SlimphpapiComponent,
    SassComponent,
    GulpjsComponent,
    ReactjsComponent,
    VuejsComponent,



  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    HighlightModule.forRoot({ theme: 'monokai-sublime'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
