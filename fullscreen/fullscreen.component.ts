import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.css']
})
export class FullscreenComponent implements OnInit {
  @Input() background: string;

  constructor() { }

  ngOnInit() {
  }
}
