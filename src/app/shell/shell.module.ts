import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
//import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    //HeaderComponent,
    //FooterComponent,
    //NavigationComponent,
    //SearchComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})

export class ShellModule { }
