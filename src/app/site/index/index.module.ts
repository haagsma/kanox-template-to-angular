import {NgModule} from "@angular/core";
import {INDEXDECLARATIONS} from "./index.declarations";
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
  declarations: INDEXDECLARATIONS,
  exports: INDEXDECLARATIONS,
  imports: [
    AppRoutingModule
  ]

})
export class IndexModule {

}
