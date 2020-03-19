import { Component, OnInit } from '@angular/core';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';

@Component({
  selector: 'app-demand-personal',
  templateUrl: './demand-personal.component.html',
  styleUrls: ['./demand-personal.component.scss']
})
export class DemandPersonalComponent implements OnInit {

  constructor(public modalDataShare: ModalDataShareService) { }

  ngOnInit() {
  }

}
