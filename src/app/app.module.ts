import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'en');

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';

import { PostsService } from './services/posts.service';

const appRoutes: Routes = [
	{ path: 'posts', component: PostListComponent },
	{ path: 'new', component: NewPostComponent },
	{ path: '', redirectTo: 'posts', pathMatch: 'full' },
	{ path: '**', redirectTo: 'posts' }
]

@NgModule({
	declarations: [
		AppComponent,
		PostListComponent,
		PostListItemComponent,
		NewPostComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		FontAwesomeModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		PostsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
