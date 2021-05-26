import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumPageRoutingModule } from './album-page-routing.module';
import { AlbumPageComponent } from './album-page.component';
import { SharedModule } from '../../components/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [AlbumPageComponent],
  imports: [
    CommonModule,
    AlbumPageRoutingModule,
    SharedModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class AlbumPageModule { }
