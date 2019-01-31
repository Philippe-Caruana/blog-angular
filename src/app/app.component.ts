import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})

export class AppComponent {

  	posts = [

  		{
  			title: "Mon premier post",
  			content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
  			loveIts: 1
  		},

  		{
  			title: "Mon deuxième post",
  			content: "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
  			loveIts: -1
  		},

  		{
  			title: "Mon troisième post",
  			content: "Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. ",
  			loveIts: 0
  		}

  	]

}