import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.interface';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets : Tweet[];

  constructor( private tweetsService: TweetsService) { }

  ngOnInit() {
    this.tweets = [];
  }

  mostrarTweets(){
    this.tweetsService.getAllTweets().subscribe(res =>{
      res.forEach(tweet =>{
        this.tweets.push(tweet);
      });
    });
  }

  likeTweet(id:number){
    this.tweetsService.like(id).subscribe(res =>{
      console.log(res);
    });
  }

}
