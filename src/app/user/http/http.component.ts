import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from 'src/app/interface/post.inteface';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent {
  public posts: post[] = [];
  public searchId: number = 20;
  public newPost: post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  private subscription: Subscription[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    const postSubscription = this.httpService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
      },
      error: () => {
        Swal.fire('Error while fetching post ');
      },
    });
    this.subscription.push(postSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
