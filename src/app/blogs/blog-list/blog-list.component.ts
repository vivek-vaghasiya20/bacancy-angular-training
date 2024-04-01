import { Component } from '@angular/core';
import { blog } from 'src/app/interface/interface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  public blogs: blog[] = [
    {
      title: 'Blog Title 1',
      description: 'Description of Blog 1',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 2',
      description: 'Description of Blog 2',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 3',
      description: 'Description of Blog 3',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 4',
      description: 'Description of Blog 4',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 5',
      description: 'Description of Blog 5',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 6',
      description: 'Description of Blog 6',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 7',
      description: 'Description of Blog 7',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 8',
      description: 'Description of Blog 8',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 9',
      description: 'Description of Blog 9',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 10',
      description: 'Description of Blog 10',
      imageUrl: 'assets/demo-image.jpg',
    },
    {
      title: 'Blog Title 11',
      description: 'Description of Blog 11',
      imageUrl: 'assets/demo-image.jpg',
    },
  ];
  public filteredBlogs: blog[] = this.blogs;
  public searchQuery: string = '';

  public search(): void {
    this.filteredBlogs = this.blogs.filter((blog) =>
      blog.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
