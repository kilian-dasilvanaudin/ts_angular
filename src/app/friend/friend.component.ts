import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friends: Friend[]=[];


  constructor(private friendService: FriendService){
    
  }

  ngOnInit(): void {
  }

viewFriends():void{
  this.friendService.getFriends().subscribe( friends => this.friends = friends.friends);
}

addFriend():void{
  
}

myEncode(toEncode:string):string{
  return btoa(toEncode);
}
}
