import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LatestRoutingModule } from "./latest-routing.module";
import { LatestComponent } from "./components/latest/latest.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [LatestComponent],
  imports: [HttpClientModule, SharedModule, CommonModule, LatestRoutingModule]
})
export class LatestModule {}
