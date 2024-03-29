import { Component, OnInit } from '@angular/core';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';
import { AccountService } from 'src/app/core/services/account.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-demand-avatar',
  templateUrl: './demand-avatar.component.html',
  styleUrls: ['./demand-avatar.component.scss']
})
export class DemandAvatarComponent implements OnInit {
  public dnd = true;
  constructor(public modalDataShare: ModalDataShareService, public accountService: AccountService) { }

  ngOnInit() {
    this.modalDataShare.title.next('profilkép');
  }
  fileEvent($event) {
    this.dnd = !$event;
  }
}
