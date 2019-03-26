import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})

export class AppComponent {

	constructor() {

		/* 
			To get your Firebase config, go to : https://console.firebase.google.com/
			-> 	Add a project
			-> 	Add Firebase to your web application by clicking on the </> icon
			->	Copy and paste the config variable here
			-> 	Add a realtime database to your project : you can choose between the test and the locked mode. 
				Choose the test mode to test the project, the locked mode is used in production.
		*/

		// Initialize Firebase

		var config = {
			apiKey: "apiKey",
			authDomain: "authDomain",
			databaseURL: "databaseURL",
			projectId: "projectId",
			storageBucket: "storageBucket",
			messagingSenderId: "messagingSenderId"
		};

		firebase.initializeApp(config);
	}
	
}