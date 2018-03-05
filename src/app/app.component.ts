import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {FirebaseService} from './services/firebase.service';
import { Router } from '@angular/router';
import { moveIn, fallIn } from './router.animations';
import {Users} from './Users';
import {Events} from './Events';
//declare var jQuery:any;

interface Post {
  firstname: string;
  lastname: string;
  phone: number;
  mobile: number;
  email: string;
  address: string;

}
interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  providers: [FirebaseService,FlashMessagesService]
})
export class AppComponent {

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  firstname: string;
  lastname: string;
  phone: number;
  mobile: number;
  email: string;
  address: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('list');
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
  }

  addPost() {
    this.afs.collection('list').add({'firstname': this.firstname, 'lastname': this.lastname, 'phone': this.phone, 'mobile': this.mobile, 'email': this.email, 'address': this.address});
    
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('list/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('list/'+postId).delete();
  }
}
