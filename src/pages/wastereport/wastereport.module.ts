import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WastereportPage } from './wastereport';

@NgModule({
  declarations: [
    WastereportPage,
  ],
  imports: [
    IonicPageModule.forChild(WastereportPage),
  ],
})
export class WastereportPageModule {}
