import { PipeTransform, Pipe } from '@angular/core';
import { Article } from './article';

@Pipe({
    name:'productsSort'
    
})
export class productsSortPipe implements PipeTransform{
    transform(articles :Article[], stort :string, isDesc: boolean){
       
        }
       
    }

