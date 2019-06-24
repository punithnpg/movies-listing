import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardsListComponent } from "./components/cards-list/cards-list.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [CardsListComponent, CardComponent],
  imports: [CommonModule],
  exports: [CardsListComponent, CardComponent]
})
export class SharedModule {}
