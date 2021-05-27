import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    MatInputModule,
    FormsModule,
    SharedModule,
  ],
})
export class SearchPageModule {}
