import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() individualCard;
  imageURL = "https://image.tmdb.org/t/p/w500/";
  constructor() {}

  ngOnInit() {}
}
