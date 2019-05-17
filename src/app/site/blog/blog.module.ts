import {NgModule} from "@angular/core";
import {BLOGDECLARATIONS} from "./blog.declarations";
import {BreadcrumbModule} from "../layout/breadcrumb/breadcrumb.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
  declarations: BLOGDECLARATIONS,
  imports: [
    BrowserModule,
    BreadcrumbModule,
    AppRoutingModule
  ]
})
export class BlogModule {

}
