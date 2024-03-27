import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: any[] = [
    {
      title: 'Blog Title 1',
      description: 'Description of Blog 1',
      imageUrl: 'path/to/image1.jpg',
    },
    {
      title: 'Blog Title 2',
      description: 'Description of Blog 2',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      title: 'Blog Title 3',
      description: 'Description of Blog 3',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      title: 'Blog Title 4',
      description: 'Description of Blog 4',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      title: 'Blog Title 5',
      description: 'Description of Blog 5',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      title: 'Blog Title 6',
      description: 'Description of Blog 6',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      title: 'Blog Title 7',
      description: 'Description of Blog 7',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      title: 'Blog Title 8',
      description: 'Description of Blog 8',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      title: 'Blog Title 9',
      description: 'Description of Blog 9',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      title: 'Blog Title 10',
      description: 'Description of Blog 10',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      title: 'Blog Title 11',
      description: 'Description of Blog 11',
      imageUrl: 'path/to/image2.jpg',
    },
  ];
  filteredBlogs: any[] = this.blogs;

  constructor() {}

  ngOnInit(): void {}

  searchQuery: string = '';

  search() {
    // console.log(this.searchQuery);
    if (this.searchQuery.trim() !== '') {
      this.filteredBlogs = this.blogs.filter((blog) =>
        blog.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      if (this.filteredBlogs.length === 0) {
        console.log('Not found any blog related to search');
      }
    } else {
      this.filteredBlogs = this.blogs;
    }
    //console.log(this.filteredBlogs);
  }
}
