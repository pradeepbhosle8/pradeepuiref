import { NgModule, Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { BootstrapComponent } from '../codeLanguage/bootstrap/bootstrap.component';
import { JavascriptComponent } from '../codeLanguage/javascript/javascript.component';
import { AngularCliComponent } from '../codeLanguage/angular-cli/angular-cli.component';
import { JsonComponent } from '../codeLanguage/json/json.component';
import { AjaxComponent } from '../codeLanguage/ajax/ajax.component';
import { NodeJSComponent } from '../codeLanguage/node-js/node-js.component';
import { NodejsapiComponent } from '../codeLanguage/json/nodejsapi/nodejsapi.component';
import { SlimphpapiComponent } from '../codeLanguage/json/slimphpapi/slimphpapi.component';
import { SassComponent } from '../codeLanguage/sass/sass.component';
import { GulpjsComponent } from '../codeLanguage/gulpjs/gulpjs.component';
import { ReactjsComponent } from '../codeLanguage/reactjs/reactjs.component';
import { VuejsComponent } from '../codeLanguage/vuejs/vuejs.component';

const routes: Routes = [
{path: 'Sass', component: SassComponent},
{path: 'bootstrap', component: BootstrapComponent},
{path: 'javascript', component: JavascriptComponent},
{path: 'gulpjs', component: GulpjsComponent},
{path: 'reactjs', component: ReactjsComponent},
{path: 'angularCli', component: AngularCliComponent},
{path: 'json', component: JsonComponent},
{path: 'nodeapi', component: NodejsapiComponent},
{path: 'slimphpapi', component: SlimphpapiComponent},
{path: 'vuejs', component: VuejsComponent},
{path: 'ajax', component: AjaxComponent},
{path: 'nodejs' , component: NodeJSComponent}





];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
