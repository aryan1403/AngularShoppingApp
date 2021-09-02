import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { item } from './item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: item[] | undefined;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/shoppingapi/get').subscribe(
      data => {
        this.items = data;
      }
    );
  }

}
