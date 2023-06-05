import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Card {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
}
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];  
  exploreWindow: boolean = false;
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.http.get<any>('https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards')
      .subscribe(response => {
        this.cards = response.listCard;
      });
  }
  explorar(){
   return this.exploreWindow = true;
  }
  
}

