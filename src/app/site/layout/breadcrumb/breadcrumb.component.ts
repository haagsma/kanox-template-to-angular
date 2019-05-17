import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'breadcrumb-layout',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit{

  title: string;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.title = this.route.snapshot.params.detalhes ? this.route.snapshot.params.detalhes.replace(/_/g, ' ') : this.route.snapshot.routeConfig.path;
  }

}
