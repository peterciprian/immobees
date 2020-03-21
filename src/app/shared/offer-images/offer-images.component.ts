import { Component, OnInit } from '@angular/core';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';

@Component({
  selector: 'app-offer-images',
  templateUrl: './offer-images.component.html',
  styleUrls: ['./offer-images.component.scss']
})
export class OfferImagesComponent implements OnInit {

  constructor(private modalDataShare: ModalDataShareService) { }

  ngOnInit() {
    this.modalDataShare.title.next('képk a lakásról');
  }

}
