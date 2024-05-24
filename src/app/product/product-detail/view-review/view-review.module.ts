import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewReviewRoutingModule } from './view-review-routing.module';
import { ViewReviewComponent } from './view-review.component';

@NgModule({
  declarations: [ViewReviewComponent],
  imports: [CommonModule, ViewReviewRoutingModule],
})
export class ViewReviewModule {}
