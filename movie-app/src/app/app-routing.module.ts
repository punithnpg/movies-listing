import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "latest",
    loadChildren:
      "./feature/latest-movies/latest-movies.module#LatestMoviesModule"
  },
  { path: "", pathMatch: "full", redirectTo: "latest" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
