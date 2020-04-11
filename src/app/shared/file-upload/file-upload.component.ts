import { Component, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {
  className: string;
  constructor() { }
  selectedFileName: string = null;
  @Input() resultArray = [];
  @Input() dnd: boolean;
  @Input() showFileNameInput: boolean;
  @Input() uploadButtonText: string;
  @Input() allowedTypes: string;
  @Input() maxUploads: number;
  @Input() maxSize: number;
  @Output() hasFile = new EventEmitter<boolean>();

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
          }
          this.selectedFileName = file.name;
          this.hasFile.emit(true);
        },
          myReader.readAsDataURL(file);
      }
    });
  }

  onDragOver() { this.className = 'hover'; return false; }
  onDragEnd() { this.className = ''; return false; }
  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.readThis(e.dataTransfer.files);
    this.className = '';
  }
}
