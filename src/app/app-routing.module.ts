import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { redirectTo: 'deezer/search', pathMatch: 'full', path: '' },
  {
    path:'deezer',
    children:[
      {
        path:'search',
        loadChildren: () => import('../app/pages/search-page/search-page.module').then((m) => m.SearchPageModule)
      },
      {
        path:'album',
        loadChildren: () => import('../app/pages/album-page/album-page.module').then((m) => m.AlbumPageModule)
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
