import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./site/index/index.component";
import {ContactComponent} from "./site/contact/contact.component";
import {BlogComponent} from "./site/blog/blog.component";
import {AboutComponent} from "./site/about/about.component";
import {ServicesComponent} from "./site/services/services.component";
import {ProjetosComponent} from "./site/projetos/projetos.component";
import {ProjetosDetalhesComponent} from "./site/projetos/detalhes/projetos-detalhes.component";
import {BlogDetalhesComponent} from "./site/blog/detalhes/blog-detalhes.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:detalhes', component: BlogDetalhesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'projetos/:detalhes', component: ProjetosDetalhesComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
