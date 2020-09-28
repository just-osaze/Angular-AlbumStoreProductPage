import { Component, Injectable, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})

@Injectable (

)

export class ProductTracklistingComponent implements OnInit {
  albumInfo:Album;
  constructor() { }

  ngOnInit() {
    this._productService.getAlbum(1)
    subscribe() (response =>{
      return this.albumInfo = response;
    });
  }

}
