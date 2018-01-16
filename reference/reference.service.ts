import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ReferenceService {
  public models = {
    first: true,
    showThis: true,
    showAny: true,
    open: false,
    reference: {},
    references: []
  };

  constructor(private router: Router, private http: HttpClient, private sanitizer: DomSanitizer) {}

  public init() {
    if (this.models.first) {
      this.http.get('/assets/json/reference.json').subscribe((r: any) => {
        this.models.references = r;
        this.show(this.find());
      });

      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.show(this.find());
        }
      });

      this.models.first = false;
    }
  }

  public dontShowThisReference() {
    let references = JSON.parse(localStorage.getItem('references'));

    this.models.showThis = !this.models.showThis;

    if (references === null) {
      references = [];
    }

    if (this.find()) {
      references.push(this.router.url);
    }

    if (!this.find()) {
      const nextReferences = [];

      for (const i in references) {
        if (references[i] !== this.router.url) {
          nextReferences.push(references[i]);
        }
      }

      references = nextReferences;
    }

    localStorage.setItem('references', JSON.stringify(references));
  }

  public dontShowAnyReference() {
    let references = [];

    this.models.showAny = !this.models.showAny;

    if (this.models.showAny) {
      references = [];
    }

    if (!this.models.showAny) {
      references = ['*'];
    }

    localStorage.setItem('references', JSON.stringify(references));
  }

  public close() {
    this.models.open = false;
  }

  private find() {
    let references = JSON.parse(localStorage.getItem('references'));
    let result = false;
    let reference = null;

    if (references == null) {
      references = [];
    }

    for (const item of this.models.references) {
      if (item.route === this.router.url) {
        result = true;
        reference = item;
      }
    }

    for (const item of references) {
      if (item === this.router.url) {
        result = false;
      }

      if (item === '*') {
        result = false;
      }
    }

    if (result) {
      result = reference;
    }

    return result;
  }

  private show(reference) {
    if (reference) {
      this.models.reference = {
        title: reference.title,
        body: this.sanitizer.bypassSecurityTrustHtml(reference.body)
      };

      this.models.open = true;
    }
  }
}
