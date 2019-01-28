import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

	@Input() postListItemTitle: string;
	@Input() postListItemContent: string;
	@Input() postListItemLoveIts: number;
	@Input() postListItemDate: object;
	

  	constructor() { 
  		this.postListItemLoveIts = 0;
  		this.postListItemDate = new Date();
  	}

  	ngOnInit() {
  	}

  	onLike() {
  		this.postListItemLoveIts = 1;
  	}

  	onDislike() {
  		this.postListItemLoveIts = -1;
  	}

  	getColor() {
  		if(this.postListItemLoveIts > 0) {
  			return '#28a745';
  		}
  		else if(this.postListItemLoveIts < 0) {
  			return '#dc3545';
  		}
  		else {
  			return '#343a40';
  		}
  	}
}
