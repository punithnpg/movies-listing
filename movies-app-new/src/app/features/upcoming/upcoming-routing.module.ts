import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UpcomingComponent } from "./components/upcoming/upcoming.component";

const routes: Routes = [
  {
    path: "",
    component: UpcomingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingRoutingModule {}
