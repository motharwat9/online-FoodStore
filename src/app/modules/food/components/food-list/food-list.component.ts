import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../service/food.service';
import { FoodCard } from 'src/app/models/food-card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{
  foods:FoodCard[]=[];
  tags:string[]=[];
  uniqueTags:string[]=[]
  serchItem:string='';
  constructor(private fs:FoodService,private route:ActivatedRoute,private activatedRoute:ActivatedRoute){
  }
  ngOnInit(): void {
    this.getAllFoods()
  
  }
  getAllFoods(){
    this.fs.getAllFoods().subscribe(res=>{
      this.foods=res
      // get All uniqe tags in this foods and stors in Array
      for(let i in this.foods){
        for(let j in this.foods[i].tags){
          (this.tags.push(this.foods[i].tags[j]))
        }
      }
      this.uniqueTags = [...new Set(this.tags)]
      // search in this foods by name and tags
      this.activatedRoute.params.subscribe(params=>{
        if(params['searchTerm']){
          this.foods=res.filter(food=> food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
        }else if(params['tags']){
          if(params['tags'] == 'All'){
            this.foods=res
          }else {
            this.foods=res.filter(food=> food.tags.includes(params['tags']))
          }
        }else{
          this.foods=res
        }
      })
    })
  }
}
