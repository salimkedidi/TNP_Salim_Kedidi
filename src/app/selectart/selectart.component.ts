import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-selectart',
  templateUrl: './selectart.component.html',
  styleUrls: ['./selectart.component.css']
})
export class SelectartComponent implements OnInit {
  article:Article;
  //productAddedTocart[]:Article;
  
  constructor(private activatedRouter:ActivatedRoute,
    private ArticlesService:ArticlesService, 
    private router:Router) { }

    ngOnInit() {
      let mat= Number(this.activatedRouter.snapshot.params['matricule']);
    this.article = this.ArticlesService.getArticleByMatricule(mat);
    console.log(mat);
    }
    onRetour()
    {   
      this.router.navigate(['/shop']);
    }/*
    addcart(product:Article){
      this.productAddedTocart=this.ArticlesService.getProductCart();
      if(this.productAddedTocart==null){
        this.productAddedTocart=[];
        this.productAddedTocart.push(product);
        this.ArticlesService.addProductToCart(this.productAddedTocart);
        this.alerts.push({
          id:1,
          type:'success',
          message:'product added to cart'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }
    }

    //
    this.cartItemCount=this.productAddedTocart.length;
    //cartevent
    this.sharedService.updateCartCount(this.cartItemCount);
  }
  public closeAlert(alert:any){
    const index: number= this.alerts.indexOf(alert);
    this.alerts.splice(index,1);
  }*/


}
