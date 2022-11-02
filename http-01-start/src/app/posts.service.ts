import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {

    error: Subject<HttpErrorResponse> = new Subject();

    private readonly REQUESTS_URL: string = '';

    constructor(
        private http: HttpClient
    ) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http.post<{ name: string }>(
            this.REQUESTS_URL,
            postData
        ).subscribe((data) => console.log(data));
    }

    fetchPosts(): Observable<Post[]> {
        return this.http.get<{ [key: string]: Post }>(this.REQUESTS_URL)
            .pipe(
                map(responseData => {
                    const postArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return postArray;
                }),
                catchError(error => {
                    this.error.next(error)
                    return throwError(error);
                }));
    }

    clearPosts() {
        return this.http.delete(this.REQUESTS_URL);
    }

}