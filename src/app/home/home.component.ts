import { Component, OnInit } from '@angular/core';
import { home } from '../model/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit{
  home= new home
  homearray=[];
  activindex=-1;
  title='Add'
  constructor() { }

  ngOnInit() {

  }
     
  onsubmit()
  {
    if(this.activindex==-1)
  {
    this.homearray.unshift(this.home)
    this.home=new home ();
  }
    else
    {
      this.homearray.splice(this.activindex,1,this.home);
    }

    this.home=new home();
    this.title='Add';
    this.activindex=-1;
  }
    
  delete(j)
  {
    this.homearray.splice(j, 1);
    
  }

  edit(obj,index)
  {
    this.title='Update';
    this.home=obj;
    this.activindex=index;
  }
}
