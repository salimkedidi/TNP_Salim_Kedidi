import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  lesArticles = [
    new Article(12345, 'HOUNDS MATCHES 2-PACK', './assets/a1.jpg',6.95,true,new Date("10/01/2019")),
    new Article(54863, 'Finger line Fish Knif', './assets/a2.jpg',11,true,new Date("01/31/2019")),
    new Article(78952, 'Timber Jones Cap', './assets/a3.jpg',24.99,false,new Date("11/11/2019")),
    new Article(13548, 'Red Stag Knife', './assets/a4.png',39.50,true,new Date("02/02/2018")),
    new Article(36985, 'Ignite Pus Camp stove', './assets/a5.jpg',134.95,false,new Date("06/07/2018")),
    new Article(10235, 'Camp table', './assets/a7.jpg',99.95,true,new Date("10/12/2019")),
    new Article(13005, 'chair with Side Table', './assets/a8.jpg',79.95,false,new Date("03/29/2019")),
    new Article(20056, 'Sleeping Bag 30°F lone pine', './assets/a9.jpg',84,false,new Date("12/10/2019")),
    new Article(78405, 'Rio Grande Queen Air Bed', './assets/a10.jpg',159.95,true,new Date("04/05/2019")),
    new Article(95123, 'Montain smith 4 Tent', './assets/a11.jpg',169.97,true,new Date("01/11/2019")),
    new Article(75357, 'Hiking Back pack eagle', './assets/a12.jpeg',32.99,true,new Date("07/11/2019")),
    new Article(45456, 'Ozark trail', './assets/a13.jpeg',40,true,new Date("10/10/2017")),
    new Article(14859, 'Quart High Perfemance Cooler', './assets/a14.jpeg',175,false,new Date("08/15/2019")),
    new Article(98756, 'Frogg Toggs Youth ', './assets/a15.jpeg',15.45,true,new Date("10/21/2019")),
    new Article(25879, '7-Pack Camping Tool Set', './assets/a16.jpeg',28.43,true,new Date("05/06/2019")),
    new Article(24450, 'Stainless Steel Louball Set of 4', './assets/a17.jpeg',27.99,true,new Date("09/28/2019")),
    new Article(67724, '3Piece cast Iron Skillet', './assets/a18.jpeg',15.98,true,new Date("04/09/2019")),
    new Article(59635, 'Small Cast Iron Griddle', './assets/a19.jpeg',10.46,true,new Date("06/30/2019")),
    new Article(63560, 'Fuel 4pack 16oz', './assets/a20.jpeg',11.97,true,new Date("08/22/2019")),

    
  ]
  cart:Article[];
  addProductToCart(product:Article){
    localStorage.setItem("product",JSON.stringify(product));
  }
  getProductCart(){
    return JSON.parse(localStorage.getItem('product'));
  }
  removeAllProductFromCart(){
    return localStorage.removeItem("product");
  }
 
  public getArticleByMatricule(mat:number)
  {
    for(let e of this.lesArticles)
    {
      if(e.matricule === mat)
        return e;
    }
  }
  public addArticle(emp:Article)
  {
    this.lesArticles.push(emp);
  }

  constructor() { }
}
