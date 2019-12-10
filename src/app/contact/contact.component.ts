import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { ArticlesService } from '../Articles.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted:boolean = false;
  name:number;
  EMAIL:string;
  Phone:number;
  Message:string;
  message="";

  constructor(private router:Router) { }

  ngOnInit() {

  }
  onSubmit(frm:NgForm){
    this.submitted =true;
    

  }
  onRetour()
    {   this.submitted=false;
      this.router.navigate(['/contact']);
    }
  
  
}



