import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CollegeComponent } from './college/college.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CompanyComponent,
    CollegeComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HomeComponent,
    CompanyComponent,
    CollegeComponent,
    NotFoundComponent,
  ],
})
export class CoreModule {}
