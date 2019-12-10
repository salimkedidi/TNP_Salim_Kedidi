import { PipeTransform, Pipe } from '@angular/core';
import { Article } from './article';

@Pipe({
    name:'articleFilter'
    
})
export class ArticleFilterPipe implements PipeTransform{
    transform(articles :Article[], searchTerm :string): Article[]{
        if(!articles || !searchTerm){
            return articles;
        }
        return articles.filter(articles => 
            articles.libelle.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}