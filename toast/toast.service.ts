import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
  public models = {
    show: false
  };

  constructor() { }

  public show() {
    this.models.show = true;

    setTimeout(() => {
      this.models.show = false;
    }, 5000);
  }
}
