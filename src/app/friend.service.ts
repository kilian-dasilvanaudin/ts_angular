import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';
import { Friends } from './friends';


@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private friendURL = "http://localhost:4567/api/friends/";
  private addFriendURL = "http://localhost:4567/api/friend";

  constructor(private http: HttpClient) {}


    getFriends(): Observable<Friends>{
      return this.http.get<Friends>(this.friendURL);
    }

    addFriend(nameOfFriend :string){
      this.http.post<any>(this.addFriend + 'name=' +nameOfFriend,{});
    }

}

