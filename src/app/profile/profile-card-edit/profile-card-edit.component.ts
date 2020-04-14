import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';
import { Picture } from 'src/app/core/models/accounts';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-profile-card-edit',
  templateUrl: './profile-card-edit.component.html',
  styleUrls: ['./profile-card-edit.component.scss']
})
export class ProfileCardEditComponent implements OnInit {

  public maxUploads = 6;
  public dnd = true;
  public imageTitleLabel: string;
  public uploadedPictures: Array<string> = [];
  public uploadedTitles: Array<string> = [];
  private picturesToSave: Array<Picture> = [];
  private maxSize = 2097152;
  resultArray = [];
  selectedFileName: string;
  public hasFile = new BehaviorSubject<any>(false);

  constructor(public accountService: AccountService) {
    this.hasFile.subscribe(e => this.save());
  }


  ngOnInit() {
    this.accountService.account.subject.pictures.forEach((img, i) => this.uploadedTitles[i] = img.label);
    this.accountService.account.subject.pictures.forEach((img, i) => this.uploadedPictures[i] = img.url);
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
      this.uploadedPictures.splice(this.maxUploads, this.uploadedPictures.length - this.maxUploads);
      this.uploadedTitles.splice(this.maxUploads, this.uploadedTitles.length - this.maxUploads);
    }
    for (let i = 0; i < this.uploadedPictures.length; i++) {
      this.picturesToSave.push({
        url: this.uploadedPictures[i],
        label: this.uploadedTitles[i]
      });
    }
    this.accountService.account.subject.pictures = this.picturesToSave;
  }

  writeValue(value: any) {
  }
  propagateChange = (_: any) => { };
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() { }

  changeListener($event): void {
    this.readThis($event.target.files);
  }
  readThis(f: FileList): void {
    const files = Array.from(f);
    if (files.length > this.maxUploads) {
      // TODO elegánsabb megoldásra cserélni!
      alert(`Túl sok fájlt próbálsz feltölteni, csak ${this.maxUploads} kép töltödik fel.`);
      files.splice(this.maxUploads, f.length - this.maxUploads);
    }
    Object.values(files).forEach((file: File) => {
      if (file.size > this.maxSize) {
        // TODO: elegánsabb megoldásra cserélni!
        alert(`A ${file.name} mérete nagyobb, mint ${this.maxSize / 1024 / 1024}Mb így nem tudod feltölteni.`);

      } else {
        const myReader: FileReader = new FileReader();
        myReader.onloadend = (e) => {
          if (this.maxUploads === 1) {
            this.propagateChange(myReader.result);
          } else {
            this.resultArray.push(myReader.result);
            this.propagateChange(this.resultArray);
            this.uploadedPictures = this.resultArray;
          }
          this.selectedFileName = file.name;
          this.hasFile.next(file);
        },
          myReader.readAsDataURL(file);
      }
    });
  }


  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.readThis(e.dataTransfer.files);
  }
}
