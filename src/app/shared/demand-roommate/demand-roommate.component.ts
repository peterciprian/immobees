import { Component, OnInit, Input } from '@angular/core';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';
import { AccountService } from 'src/app/core/services/account.service';


@Component({
  selector: 'app-demand-roommate',
  templateUrl: './demand-roommate.component.html',
  styleUrls: ['./demand-roommate.component.scss']
})
export class DemandRoommateComponent implements OnInit {

  @Input() showImage = true;
  constructor(
    private modalDataShare: ModalDataShareService,
    public accountService: AccountService) { }

  ngOnInit() {
    this.modalDataShare.title.next('ideális lakótárs');
  }

}
