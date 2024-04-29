import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent {
  //public onAddBookEvent() {}
  public url!: string;
  bookForm!: FormGroup;
  // fileToUpload!: File | null;
  // public emptyField: boolean = false;
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
      file: ['', Validators.required],
    });
  }

  // handleFileInput(files: FileList) {
  //   this.fileToUpload = files.item(0);
  // }

  handleFileInput(event: any) {
    const files: FileList = event.target.files;
    if (files.length === 0) {
      this.url = '';
      return;
    }

    const file: File = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.url = reader.result as string;
    };
  }

  onSubmit() {
    this.bookService.addBook({
      title: this.bookForm.get('title')?.value,
      author: this.bookForm.get('author')?.value,
      description: this.bookForm.get('description')?.value,
      price: this.bookForm.get('price')?.value,
      category: this.bookForm.get('category')?.value,
      imageURL: this.url,
    });
    this.bookForm.reset();
  }
}
