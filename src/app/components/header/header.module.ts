import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { HeaderRoutingModule } from './header-routing.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderRoutingModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
