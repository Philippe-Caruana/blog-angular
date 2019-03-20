import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/Post.model';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

	faThumbsUp = faThumbsUp;
	faThumbsDown = faThumbsDown;
	faHeart = faHeart;

	@Input() post: Post;
	
  	constructor(private postsService: PostsService, private router: Router) { 
  	
  	}

  	ngOnInit() {
  	}

  	onLike(post: Post) {
		this.postsService.likePost(post);
  	}

  	onDislike(post: Post) {
		this.postsService.dislikePost(post);
  	}

  	getColor() {
  		if(this.post.loveIts > 0) {
  			return '#28a745';
  		}
  		else if(this.post.loveIts < 0) {
  			return '#dc3545';
  		}
  		else {
  			return '#343a40';
  		}
  	}
	
	onDeletePost(post: Post) {
		this.postsService.removePost(post);
	}
}