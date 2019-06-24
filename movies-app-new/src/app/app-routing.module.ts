import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./core/components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "latest",
        loadChildren: "./features/latest/latest.module#LatestModule"
      },
      {
        path: "upcoming",
        loadChildren: "./features/upcoming/upcoming.module#UpcomingModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
