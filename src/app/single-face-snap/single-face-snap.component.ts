import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";
import {FaceSnapService} from "../service/face-snap.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: String;

  constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    const snapId = +this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    this.buttonText = 'Oh Snap!'
  }

  onSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un Snap!'
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!'
    }
  }

}
