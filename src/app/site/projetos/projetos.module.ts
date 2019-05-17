import {NgModule} from "@angular/core";
import {IndexModule} from "../index/index.module";
import {BreadcrumbModule} from "../layout/breadcrumb/breadcrumb.module";
import {ProjetosComponent} from "./projetos.component";
import {ProjetosDetalhesComponent} from "./detalhes/projetos-detalhes.component";

@NgModule({
  declarations: [
    ProjetosComponent,
    ProjetosDetalhesComponent
  ],
  imports: [
    IndexModule,
    BreadcrumbModule
  ]
})
export class ProjetosModule {

}
