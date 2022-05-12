import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.models";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Sundhoffen'
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour la randonée',
      imageUrl: 'https://images.unsplash.com/photo-1501663471061-066d7e300002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
      createdDate: new Date(),
      snaps: 0,
      location: 'la montagne'
    }, {
      id: 3,
      title: 'Un bon repas',
      description: "Mmmm c'est trop bon",
      imageUrl: 'https://images.unsplash.com/photo-1573836469309-6c5d4de9870b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80',
      createdDate: new Date(),
      snaps: 0
    },
    {
      id: 4,
      title: 'Skater',
      description: 'Détente au coucher du soleil',
      imageUrl: 'https://images.unsplash.com/photo-1597019558926-3eef445fdf60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2thdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      createdDate: new Date(),
      snaps: 0
    },
    {
      id: 5,
      title: 'Soirée Netflix',
      description: 'Que choisir ...',
      imageUrl: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      createdDate: new Date(),
      snaps: 0,
      location: 'la maison'
    }, {
      id: 6,
      title: 'Virée en voiture',
      description: "Aller je sors le monstre du garage",
      imageUrl: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      createdDate: new Date(),
      snaps: 0
    }
  ];

  getAllFaceSnaps(): FaceSnap [] {
    return this.faceSnaps;
  }

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(facesnap => facesnap.id === id);

    if (!faceSnap) {
      throw new Error('faceSnap not found!')
    } else {
      return faceSnap
    }
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void {

    const faceSnap = this.getFaceSnapById(id);

    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--

  }

}
