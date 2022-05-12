import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";
import {FaceSnapService} from "../service/face-snap.service";
import {interval, Subject} from "rxjs";
import {tap, takeUntil} from 'rxjs/operators'

@Component({
  selector: 'app-face-snap-list',
  templateUrl: "./face-snap-list.component.html",
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>


  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
    this.destroy$ = new Subject<boolean>();

    interval(1000).pipe(
      tap(console.log),
      takeUntil(this.destroy$)
    ).subscribe();

  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }


}
