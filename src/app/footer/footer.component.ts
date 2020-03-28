import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { PublicService } from '../core/services/public.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  totalDemands: number;
  totalOffers: number;
  faCoffee = faCoffee;

  constructor(public publicS: PublicService, public modalService: ModalService) { }

  ngOnInit() {
    this.publicS.getStatistics().subscribe(res => {
      this.totalDemands = res.totalDemands;
      this.totalOffers = res.totalOffers;
    },
      error => { console.error(error); }
    );
  }

}
