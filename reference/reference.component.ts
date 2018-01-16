import { Component, OnInit } from '@angular/core';
import { ReferenceService } from './reference.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
  public models;

  constructor(private service: ReferenceService) { }

  ngOnInit() {
    this.service.init();
    this.models = this.service.models;
  }

  public dontShowAnyReference() {
    this.service.dontShowAnyReference();
  }

  public dontShowThisReference() {
    this.service.dontShowThisReference();
  }

  public close() {
    this.service.close();
  }
}
