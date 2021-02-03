import { TccService } from './../../services/tcc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-tcc',
  templateUrl: './update-tcc.component.html',
  styleUrls: ['./update-tcc.component.css']
})
export class UpdateTccComponent implements OnInit {
  fileToUpload: File;

  constructor(private tccService: TccService) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

}
