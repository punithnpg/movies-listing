import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LatestMoviesComponent } from "./components/latest-movies/latest-movies.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LatestMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestMoviesRoutingModule {}
