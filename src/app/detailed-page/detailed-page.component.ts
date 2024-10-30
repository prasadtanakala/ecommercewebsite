import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { elementAt, materialize } from 'rxjs';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.css']
})
export class DetailedPageComponent implements OnInit{
  addtocartdetails: any;
  cartdata: any;
  productdetails: any;
  prdetails: any=[];
  cartpage: any=[];
  totalprice: any;
  pricecal: any;
  totalcost: any;
  checkOutbtn:boolean= false
  constructor(private service: CommonService,private route:Router){}

  ngOnInit(): void {
   this.service.checkaddtocart.subscribe((res:any)=>{
    console.log(res,'321:::')
    this.cartpage = res;
   })
   this.totalprice = 0; 
   this.cartpage.forEach((element:any) => {
       const individualPrice = element?.numberofitems * element?.price; 
       this.totalprice += individualPrice; 
       
   });
     console.log(console.log(this.totalprice,'9898::'));
  }
  Checkout(i:any){
    if(this.cartpage.length > 0){
      window.alert('order placed successfully');
      this.cartpage.splice(0)
      this.route.navigate(['/homepage']);
    }
    else{
      window.alert('cart is empty')
    }
  }
  delete(index:any){
  
     const individualPrice = this.cartpage[index]?.numberofitems * this.cartpage[index]?.price
     this.cartpage.splice(index,1);
     Math.round( this.totalprice -= individualPrice);
    
  }

}
