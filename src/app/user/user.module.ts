import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { userRoute } from './user.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoute)],
  declarations: [
    ProfileComponent
  ],
  providers: []
})
export class UserModule {}
