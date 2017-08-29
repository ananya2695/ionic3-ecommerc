import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProfileDetailComponent } from './profile-detail';

@NgModule({
  declarations: [
    ProfileDetailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProfileDetailComponent
  ]
})
export class ProfileDetailComponentModule {}
