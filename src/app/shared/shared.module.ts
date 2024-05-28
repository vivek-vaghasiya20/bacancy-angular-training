import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './card/card.component';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [CardComponent, CustomDirective],
  imports: [CommonModule, SharedRoutingModule],
  exports: [CardComponent, CustomDirective],
})
export class SharedModule {}
