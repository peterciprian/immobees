import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ViewService } from 'src/app/core/view.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-high-light',
  templateUrl: './high-light.component.html',
  styleUrls: ['./high-light.component.scss']
})
export class HighLightComponent {

  @Input() account;

  constructor(private viewService: ViewService, private router: Router) { }

  view(account) {
    this.viewService.flatMate = account;
    this.router.navigate(['/view']);
  }
}
