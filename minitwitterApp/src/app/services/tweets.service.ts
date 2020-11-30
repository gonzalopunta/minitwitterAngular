import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewTweet } from '../models/newTweet.interface';
import { Tweet } from '../models/tweet.interface';


const ALL_TWEETS_URL = 'https://www.minitwitter.com:3001/apiv1/tweets/all';
const NEW_TWEET_URL = 'https://www.minitwitter.com:3001/apiv1/tweets/create';
const LIKE_TWEET_URL = 'https://www.minitwitter.com:3001/apiv1/tweets/like';


var usuario= JSON.parse(localStorage.getItem('usuario'));

var token= usuario.token;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+ token
  })
};

@Injectable({
  providedIn: 'root'
})

export class TweetsService {

  constructor(private http:HttpClient) { }

  getAllTweets(): Observable<Tweet[]>{
    return this.http.get<Tweet[]>(
      ALL_TWEETS_URL,
      httpOptions
    );
  }

  newTweet(tweet:NewTweet): Observable<Tweet>{
    return this.http.post<Tweet>(
      NEW_TWEET_URL,
      tweet,
      httpOptions
    );
  }

  like(id:number): Observable<Tweet>{
    return this.http.post<Tweet>(
      LIKE_TWEET_URL + "/" + id,
      null,
      httpOptions
    );
  }
}
