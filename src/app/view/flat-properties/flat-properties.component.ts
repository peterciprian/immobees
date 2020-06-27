import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';
import { ViewService } from 'src/app/core/services/view.service';
import { FirebaseFirestoreService } from 'src/app/core/services/firebase-firestore.service';

@Component({
  selector: 'app-flat-properties',
  templateUrl: './flat-properties.component.html',
  styleUrls: ['./flat-properties.component.scss']
})
export class FlatPropertiesComponent implements OnInit {
  public showAll = false;
  constructor(public viewService: ViewService, public fs: FirebaseFirestoreService) { }

  ngOnInit() {
  }

}
