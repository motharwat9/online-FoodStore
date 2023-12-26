import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm:string='';
  constructor(private activatedRoute:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['searchTerm']){
        this.searchTerm=params['searchTerm']
      }
    })
  }
  search(){
    if(this.searchTerm)
      this.router.navigate([`/search/`+this.searchTerm])
    else 
      this.router.navigate([''])
  }
}