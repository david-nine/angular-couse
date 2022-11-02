import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching: boolean = false;
  error = null;
  private ngUnsubscribe = new Subject();

  constructor(
    private postService: PostsService
  ) { }
  
  ngOnInit() {
    this.postService.error
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(errorResponse => {
      this.error = errorResponse.error.error;
      this.isFetching = false;
    });
    this.fetchPosts();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.isFetching = true;
    this.postService.clearPosts()
      .subscribe(() => {
        this.loadedPosts = []
        this.isFetching = false;
      });
  }

  private fetchPosts() {
    this.isFetching = true;
    this.error = false;
    this.postService.fetchPosts()
      .subscribe(postData => {
        this.loadedPosts = postData;
        this.isFetching = false;
      });
  }
}
