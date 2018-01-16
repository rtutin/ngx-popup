import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { ToastComponent } from './toast/toast.component';
import { ReferenceComponent } from './reference/reference.component';
import { ToastService } from './toast/toast.service';
import { ReferenceService } from './reference/reference.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FullscreenComponent, ToastComponent, ReferenceComponent],
  exports: [FullscreenComponent, ToastComponent, ReferenceComponent],
  providers: [ToastService, ReferenceService]
})
export class PopupModule { }
