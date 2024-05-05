import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { BookService } from 'service/book.service';
import { __addDisposableResource } from 'tslib';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent {
  public imageUrl!: string;
  public bookForm!: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public handleFileInput(event: any): void {
    const files: FileList = event.target.files;
    if (files.length === 0) {
      this.imageUrl = '';
      return;
    }
    const file: File = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
  }

  public onSubmit(): void {
    this.bookService
      .addBook({
        title: this.bookForm.get('title')?.value,
        author: this.bookForm.get('author')?.value,
        description: this.bookForm.get('description')?.value,
        price: this.bookForm.get('price')?.value,
        category: this.bookForm.get('category')?.value,
        imageURL: this.imageUrl,
      })
      .pipe(take(1))
      .subscribe({
        next: () => alert('Book Successfully added'),
        error: () => alert('Sorry! Something went wrong. Book can not added.'),
      });
    this.bookForm.reset();
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }
}
