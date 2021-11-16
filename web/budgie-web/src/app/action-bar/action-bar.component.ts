import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  action:string = "Add";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e:any):void {
    e.preventDefault();
    console.log(e.target.elements);
    alert("added $" + e.target.elements.transactionAmountDollars.value);
  }

}
