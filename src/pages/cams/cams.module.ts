import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamsPage } from './cams';

@NgModule({
  declarations: [
    CamsPage,
  ],
  imports: [
    IonicPageModule.forChild(CamsPage),
  ],
  exports: [
    CamsPage
  ],
  
})
export class CamsPageModule {}
