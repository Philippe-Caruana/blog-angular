import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	@Input() date: object;
	

  	constructor() { 
  		this.date = new Date();
  	}

  	ngOnInit() {
  	}

  	onLike() {
  		this.loveIts += 1;
  	}

  	onDislike() {
  		this.loveIts -= 1;
  	}

  	getColor() {
  		if(this.loveIts > 0) {
  			return '#28a745';
  		}
  		else if(this.loveIts < 0) {
  			return '#dc3545';
  		}
  		else {
  			return '#343a40';
  		}
  	}

}
