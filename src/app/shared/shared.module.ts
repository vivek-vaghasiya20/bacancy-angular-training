import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './card/card.component';
import { CustomDirective } from './custom.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    CardComponent,
    CustomDirective,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [CardComponent, CustomDirective, HeaderComponent, FooterComponent],
})
export class SharedModule {}
