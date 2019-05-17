import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DEClARATIONS} from "./app.declarations";
import {IndexModule} from "./site/index/index.module";
import {BlogModule} from "./site/blog/blog.module";
import {BreadcrumbModule} from "./site/layout/breadcrumb/breadcrumb.module";
import {ProjetosModule} from "./site/projetos/projetos.module";


@NgModule({
  declarations: DEClARATIONS,
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    BlogModule,
    BreadcrumbModule,
    ProjetosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
