import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class firstComponent implements OnInit {
  public item: any; //宣告一個名為item的any變數
  constructor() { }

  ngOnInit() {
  }
}
