import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SingleFaceSnapComponent} from "./components/single-face-snap/single-face-snap.component";
import {FaceSnapListComponent} from "./components/face-snap-list/face-snap-list.component";
import {NewFaceSnapComponent} from "./components/new-face-snap/new-face-snap.component";
import {AuthGuards} from "../core/guards/auth.guards";

const routes: Routes = [
  {path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuards]},
  {path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuards]},
  {path: '', component: FaceSnapListComponent, canActivate: [AuthGuards]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class FaceSnapsRoutingModule {}
