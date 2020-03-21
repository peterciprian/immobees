import { Component, OnInit } from '@angular/core';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';

@Component({
  selector: 'app-demand-roommate',
  templateUrl: './demand-roommate.component.html',
  styleUrls: ['./demand-roommate.component.scss']
})
export class DemandRoommateComponent implements OnInit {

  constructor(private modalDataShare: ModalDataShareService) { }

  ngOnInit() {
    this.modalDataShare.title.next('ideális lakótárs');
  }

}
