import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';
import { AccountService } from 'src/app/core/services/account.service';
import { Picture } from 'src/app/core/models/accounts';

@Component({
  selector: 'app-offer-images',
  templateUrl: './offer-images.component.html',
  styleUrls: ['./offer-images.component.scss']
})
export class OfferImagesComponent implements OnInit {

  public maxUploads = 6;
  public dnd = true;
  public imageTitleLabel: string;
  public uploadedPictures: Array<string> = [];
  public uploadedTitles: Array<string> = [];
  private picturesToSave: Array<Picture> = [];

  constructor(public modalDataShare: ModalDataShareService, public accountService: AccountService) { }

  ngOnInit() {
    this.modalDataShare.title.next('képek a lakásról');
    this.accountService.account.subject.pictures.forEach((img, i) => this.uploadedTitles[i] = img.label);
    this.accountService.account.subject.pictures.forEach((img, i) => this.uploadedPictures[i] = img.url);
  }
  fileEvent($event) {
    this.dnd = !$event;
    this.save();
  }
  delete(img) {
    this.uploadedPictures.splice(this.uploadedPictures.findIndex(e => e === img.url), 1);
    this.uploadedTitles.splice(this.uploadedTitles.findIndex(e => e === img.label), 1);
    this.save();
  }
  top(img) {
    this.uploadedPictures.splice(this.uploadedPictures.findIndex(e => e === img.url), 1);
    this.uploadedTitles.splice(this.uploadedTitles.findIndex(e => e === img.label), 1);
    this.uploadedPictures.unshift(img.url);
    this.uploadedTitles.unshift(img.label);
    this.save();
  }
  save() {
    this.picturesToSave = [];
    if (this.uploadedPictures.length > this.maxUploads) {
      alert(`Túl sok fájlt próbálsz feltölteni, csak ${this.maxUploads} kép töltödik fel.`);
      this.uploadedPictures.splice(this.maxUploads, this.uploadedPictures.length - this.maxUploads)
      this.uploadedTitles.splice(this.maxUploads, this.uploadedTitles.length - this.maxUploads)
    }
    for (let i = 0; i < this.uploadedPictures.length; i++) {
      this.picturesToSave.push({
        url: this.uploadedPictures[i],
        label: this.uploadedTitles[i]
      });
    }
    this.accountService.account.subject.pictures = this.picturesToSave;
  }
}
