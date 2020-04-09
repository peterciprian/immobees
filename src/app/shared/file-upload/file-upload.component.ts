import { NgModule, Component, Input, Output, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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

  constructor() { }

  selectedFileName: string = null;
  @Input() dnd: boolean;
  @Input() showFileNameInput: boolean;
  @Input() uploadButtonText: string;
  @Input() allowedTypes: string;
  @Input() maxUploads: number;
  @Input() maxSize: number;

  writeValue(value: any) {
  }
  propagateChange = (_: any) => { };
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() { }

  changeListener($event): void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    console.log(inputValue.files);
    if (inputValue.files.length > this.maxUploads) {
      // TODO elegánsabb megoldásra cserélni!
      alert(`Túl sok fájlt próbálsz feltölteni, csak az első ${this.maxUploads} kiválasztott kép töltödik fel.`);

      Object.values(inputValue.files).forEach((file: File) => {
        console.log(file.size);
        if (file.size > this.maxSize) {
          // TODO: elegánsabb megoldásra cserélni!
          alert(`A ${file.name} mérete nagyobb, mint ${this.maxSize / 1024 / 1024}Mb így nem tudod feltölteni.`);

        } else {
          const myReader: FileReader = new FileReader();
          myReader.onloadend = (e) => {
            console.log(e);
            this.propagateChange(myReader.result);
            this.selectedFileName = file.name;
          },
            myReader.readAsDataURL(file);
        }
      });
    }
  }
}
