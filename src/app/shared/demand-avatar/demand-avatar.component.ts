import { Component, OnInit } from '@angular/core';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';

@Component({
  selector: 'app-demand-avatar',
  templateUrl: './demand-avatar.component.html',
  styleUrls: ['./demand-avatar.component.scss']
})
export class DemandAvatarComponent implements OnInit {

  private image: string;
  constructor(public modalDataShare: ModalDataShareService) { }

  ngOnInit() {
  }

}
