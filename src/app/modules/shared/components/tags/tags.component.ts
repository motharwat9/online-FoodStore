import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
@Input() tags:any[]=[]
@Input() showAll:boolean=true;
}
