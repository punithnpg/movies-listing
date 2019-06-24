import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UpcomingRoutingModule } from "./upcoming-routing.module";
import { UpcomingComponent } from "./components/upcoming/upcoming.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [UpcomingComponent],
  imports: [CommonModule, SharedModule, UpcomingRoutingModule]
})
export class UpcomingModule {}
