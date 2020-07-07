import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';



@NgModule({
  declarations: [LoginpageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginpageComponent
  ]
})
export class LoginModule { }
