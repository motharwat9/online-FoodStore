import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { FoodCard } from 'src/app/models/food-card';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAllFoods():Observable<FoodCard[]>{
    return this.http.get<FoodCard[]>(`http://localhost:3000/foods`).pipe(
      retry(2)
    )
  }
  getFoodById(foodID:number):Observable<FoodCard>{
    return this.http.get<FoodCard>(`http://localhost:3000/foods/${foodID}`).pipe(
      retry(2)
    )
  }
}
