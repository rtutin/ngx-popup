import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  public models;

  constructor(private service: ToastService) { }

  ngOnInit() {
    this.models = this.service.models;
  }
}
