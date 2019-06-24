import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LatestComponent } from "./components/latest/latest.component";

const routes: Routes = [
  {
    path: "",
    component: LatestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestRoutingModule {}
