import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile.component';
import { UserRouteModule } from './user-route.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRouteModule,
    SharedModule
  ]
})
export class UserModule { }
