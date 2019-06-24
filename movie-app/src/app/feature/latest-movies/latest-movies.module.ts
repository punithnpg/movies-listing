import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LatestMoviesRoutingModule } from "./latest-movies-routing.module";
import { LatestMoviesComponent } from "./components/latest-movies/latest-movies.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [LatestMoviesComponent],
  imports: [CommonModule, LatestMoviesRoutingModule, SharedModule]
})
export class LatestMoviesModule {}
