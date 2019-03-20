import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})

export class AppComponent {

	constructor() {
		var config = {
			apiKey: "AIzaSyA0_26UrG9CNeaTdSXGCzjvlGJf1ryd9G4",
			authDomain: "blog-39015.firebaseapp.com",
			databaseURL: "https://blog-39015.firebaseio.com",
			projectId: "blog-39015",
			storageBucket: "blog-39015.appspot.com",
			messagingSenderId: "365584144904"
		};

		firebase.initializeApp(config);
	}
	
}